const express = require("express");
const cors = require("cors");
const dns = require("node:dns");
const ShortUniqueId = require("short-unique-id");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded());

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

app.post("/api/shorturl", (req, res) => {
  const { url } = req.body;

  // Remove protocol and characters after (and including) trailing /
  const formattedUrl = url
    .replace(/(^\w+:|^)\/\//, "")
    .replace(/\/[^\/]*$/, "");

  dns.lookup(formattedUrl, options, (err, address, family) => {
    if (err) {
      return res.json({
        error: "Invalid url",
      });
    } else {
      const { randomUUID } = new ShortUniqueId({ length: 5 });

      const result = {
        original_url: url,
        short_url: randomUUID(),
      };

      return res.json(result);
    }
  });
});

module.exports = app;

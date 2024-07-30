const express = require("express");
const cors = require("cors");
const urlRouter = require("./routes/urlRoutes");

const app = express();

// Middleware
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/public", express.static(`${process.cwd()}/public`));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.use("/api/shorturl", urlRouter);

module.exports = app;

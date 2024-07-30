const dns = require("node:dns");
const ShortUniqueId = require("short-unique-id");
const URL = require("./../models/urlModel");

const options = {
  family: 6,
  hints: dns.ADDRCONFIG | dns.V4MAPPED,
};

const createUrl = (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.json({ error: "URL is required" });
    }

    // Remove protocol and characters after (and including) trailing /
    const formattedUrl = url
      .replace(/(^\w+:|^)\/\//, "")
      .replace(/\/[^\/]*$/, "");

    dns.lookup(formattedUrl, options, async (err) => {
      if (err) {
        return res.json({
          error: "Invalid url",
        });
      } else {
        const urlObj = await URL.findOne({ original_url: url });

        if (urlObj) {
          return res.json({
            original_url: urlObj.original_url,
            short_url: urlObj.short_url,
          });
        }

        const { randomUUID } = new ShortUniqueId({ length: 5 });

        const result = {
          original_url: url,
          short_url: randomUUID(),
        };

        const savedDoc = new URL(result);

        await savedDoc.save();

        return res.json(result);
      }
    });
  } catch (error) {
    res.json({
      error: "Internal server error",
    });
  }
};

module.exports = { createUrl };

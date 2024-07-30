const express = require("express");
const { createUrl, redirectUrl } = require("./../controllers/urlController");

const router = express.Router();

router.route("/").post(createUrl);
router.route("/:short_url").get(redirectUrl);

module.exports = router;

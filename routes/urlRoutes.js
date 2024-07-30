const express = require("express");
const { createUrl } = require("./../controllers/urlController");

const router = express.Router();

router.route("/").post(createUrl);

module.exports = router;

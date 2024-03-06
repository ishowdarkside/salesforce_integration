const express = require("express");
const path = require("path");
const { postUser } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "salesforce"
));

const router = express.Router();

router.post("/publish-account", postUser);

module.exports = router;

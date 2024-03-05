const express = require("express");
const path = require("path");
const { checkReference } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "reference"
));
const router = express.Router();

router.post("/check-reference", checkReference);

module.exports = router;

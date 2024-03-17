const express = require("express");
const path = require("path");
const { catchUsers, findUser } = require(path.join(
  __dirname,
  "..",
  "controllers",
  "database"
));

const router = express.Router();

//router.post("/create-users", catchUsers);
router.get("/find-user/:reference", findUser);

module.exports = router;

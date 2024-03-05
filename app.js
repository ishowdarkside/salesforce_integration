const express = require("express");
const dotenv = require("dotenv");
const app = express();
const referenceRouter = require("./routes/reference");
dotenv.config({ path: "./.env" });

app.use(express.json());
app.use("reference-number/", referenceRouter);

module.exports = app;

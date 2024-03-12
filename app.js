const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const referenceRouter = require("./routes/reference");
const salesforceRouter = require("./routes/salesforce");
const errorController = require("./controllers/errorController");
dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: "https://www.myoneloan.com",
  })
);
app.options("/reference-number/check-reference", cors());
app.use(express.json());
app.use("/reference-number", referenceRouter);
app.use("/salesforce", salesforceRouter);
app.use("*", (req, res, next) => {
  res.status(400).json({ status: "fail", message: "Route not found!" });
});

app.use(errorController);

module.exports = app;

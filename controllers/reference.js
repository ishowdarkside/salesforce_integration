const path = require("path");
const catchAsync = require(path.join(
  __dirname,
  "..",
  "utilities",
  "catchAsync"
));
const AppError = require(path.join(__dirname, "..", "utilities", "AppError"));
const referenceNumbers = require(path.join(
  __dirname,
  "..",
  "utilities",
  "referenceNumbers"
));

exports.checkReference = catchAsync(async (req, res, next) => {
  const { input } = req.body;

  if (!referenceNumbers.some((e) => e === input.toUpperCase()))
    return next(new AppError(401, "Invalid code"));

  res.header("Access-Control-Allow-Origin", "*");

  res.status(200).json({
    test: "TOO",
    status: "success",
    message: "valid code",
  });
});

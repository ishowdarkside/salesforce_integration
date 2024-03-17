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
//const xlsx = require("xlsx");
const User = require(path.join(__dirname, "..", "models", "User"));

/*const excelFile = xlsx.readFile(
  path.join(__dirname, "..", "utilities", "excel.xlsx")
);*/

//const excelSheet = excelFile.Sheets[excelFile.SheetNames[0]];

/*
exports.catchUsers = catchAsync(async (req, res, next) => {
  const rows = xlsx.utils.sheet_to_json(excelSheet);

  rows.forEach((row) => {
    const document = new User({
      firstName: row.FirstName,
      lastName: row.LastName,
      street: row.Street,
      city: row.City,
      state: row.St,
      zip: row.ZIP,
      reference: row["Reference Number"],
    });

    document
      .save()
      .then(() => {
        console.log("Document saved successfully");
      })
      .catch((err) => {
        console.error("Error saving document", err);
      });
  });

  return res.status(200).json({
    message: "Finished",
  });
});*/

exports.findUser = catchAsync(async (req, res, next) => {
  const { reference } = req.params;
  console.log(reference);
  const user = await User.findOne({ reference });

  return res.status(200).json({
    status: "success",
    user,
  });
});

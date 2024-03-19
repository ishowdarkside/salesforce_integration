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

exports.postUser = catchAsync(async (req, res, next) => {
  const {
    debt,
    firstName,
    lastName,
    address,
    city,
    state,
    zip,
    phone,
    dateOfBirth,
    email,
    reference,
  } = req.body;

  const response = await fetch(
    `https://carbon.clearoneadvantage.com/api/lead/create?detailedResponse=true`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        APIKEY: process.env.API_KEY,
      },
      body: JSON.stringify({
        LeadId: 50,
        Debt: debt,
        FirstName: firstName,
        LastName: lastName,
        Address: address,
        City: city,
        State: state,
        Zip: zip,
        Phone: phone,
        DateOfBirth: dateOfBirth,
        Email: email,
        ExternalLeadSource: reference,
      }),
    }
  );

  const data = await response.json();

  res.status(200).json({
    data,
  });
});

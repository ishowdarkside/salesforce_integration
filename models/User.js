const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  street: String,
  city: String,

  state: String,
  zip: String,
  reference: String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

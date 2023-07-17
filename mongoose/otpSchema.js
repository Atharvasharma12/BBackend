const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
  mail: "string",
  otp: "number",
  createdAt: { type: String, index: true },
});

const OTPModel = new mongoose.model("OTPModel", OTPSchema);

module.exports = OTPModel;

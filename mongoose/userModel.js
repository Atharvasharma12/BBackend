const mongoose = require("mongoose");

const newUserSchema = mongoose.Schema({
  name: "string",
  email: "string",
  password: "string",
  gwtToken: "string",
  products: [{
    type: "ObjectId",
    ref: "productModel",
  }],
});

const newUserModel = new mongoose.model("newUserModel", newUserSchema);

module.exports = newUserModel;

const mongoose = require("mongoose");

const productModel = require("../mongoose/productModel");

const conGetAllProducts = async (req, res) => {
  try {
    const allProduct = await productModel.find({});
    res.send(allProduct);
  } catch (error) {
    res.send(error);
  }
};

module.exports = conGetAllProducts;

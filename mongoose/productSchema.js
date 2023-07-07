const mongoose = require("mongoose");
const productModel = require("./productModel");
const newUserModel = require("./userModel");

const addNewProduct = async (productData) => {
  const newProduct = new productModel({
    productName: productData.productName,
    productCategory: productData.productCategory,
    productDescription: productData.productDescription,
    productPrice: productData.productPrice,
    productImg:productData.productImg,
    sellerId: productData.sellerId,
  });

    console.log(newProduct);

  try {
    await newProduct.save();

    const appendToUserModel = await newUserModel.findOneAndUpdate(
      { _id: productData.sellerId },
      { $push: { products: newProduct._id } }
    );

    return "product aploaded";
  } catch (error) {
    console.log(error);
  }
};

module.exports = addNewProduct;

const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    productName: 'string',
  productCategory: 'string',
  productDescription: 'string',
  productPrice: 'number',
  productImg: 'string',
  sellerId: {
    type : "ObjectId",
    ref : "newUserModel",
  },
  sid : {
    type: mongoose.Schema.Types.ObjectId,
    ref : "newUserModel",
  }
})

const productModel = new mongoose.model("productModel" , productSchema )

module.exports = productModel;
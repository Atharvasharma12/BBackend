const productModel = require("../mongoose/productModel");

const conDeleteProduct = async (req, res) => {
  try {
    const  productid  = req.headers.productid;

    const product = await productModel.findOneAndRemove({ _id: productid });

    console.log(product)

    res.send("Product removed");
  } catch (error) {
    console.log(error);
  }
};

module.exports = conDeleteProduct;

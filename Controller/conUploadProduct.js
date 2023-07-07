const addNewProduct = require("../mongoose/productSchema");

const conUploadProduct = async (req, res) => {
  try {
    let response = await addNewProduct(req.body);
    res.send(response);
  } catch (error) {}
};

const conGetUploadProducts = async (req, res) => {
  console.log(req.body);
  res.send("getting items for you");
};

module.exports = { conUploadProduct, conGetUploadProducts };

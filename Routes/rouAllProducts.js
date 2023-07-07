const express = require("express");
const router = express.Router();
const conGetAllProducts = require("../Controller/conGetAllProducts");

router.route("/").get((req, res) => conGetAllProducts(req, res));

module.exports = router;

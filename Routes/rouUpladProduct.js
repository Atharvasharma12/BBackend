const express = require('express')
const router = express.Router();
const {conUploadProduct,conGetUploadProducts} = require('../Controller/conUploadProduct')


router.route("/").post((req , res)=>conUploadProduct(req , res))
router.route("/").get((req , res)=>conGetUploadProducts(req , res))




module.exports = router;
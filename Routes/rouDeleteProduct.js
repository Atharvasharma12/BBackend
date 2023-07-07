const express = require('express')
const router = express.Router();

const conDeleteProduct = require('../Controller/conDeleteProduct')

router.route("/").delete(conDeleteProduct)


module.exports = router;
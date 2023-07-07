const express = require('express');
const router = express.Router()
const conLogout = require('../Controller/conLogout')

router.route("/").post((req , res)=>conLogout(req , res))


module.exports = router;
const express = require('express')
const router = express.Router()
const userAccount = require("../Controller/conUserAccount")


router.route('/').post((req , res)=>userAccount(req , res))

module.exports = router;
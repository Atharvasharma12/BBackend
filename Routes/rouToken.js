const express = require('express')
const router = express.Router();
const {generateToken , validateToken} = require("../Controller/conToken")


router.route("/generate").post((req  , res)=>generateToken(req , res))
router.route("/validate").get((req  , res)=>validateToken(req , res))


module.exports = router
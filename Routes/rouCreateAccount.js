const express = require("express")
const router = express.Router();
const conCreateAccount = require("../Controller/conCreateAccount")


router.route("/").post(conCreateAccount)

module.exports = router;
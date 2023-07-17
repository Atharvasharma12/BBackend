const conSendOTP = require("../Controller/conSendOTP");
const express = require("express");
const router = express.Router();

router.route("/").post(conSendOTP);

module.exports = router;

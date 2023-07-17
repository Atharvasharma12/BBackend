const express = require("express");
const SendMailToSeller = require("../Controller/conSendMailToSeller");
const router = express.Router();

router.route("/").post(SendMailToSeller);

module.exports = router;

const express = require("express");
const router = express.Router();
const userLoginFunc = require("../Controller/conUserLogin");

router.route("/").get((req, res) => userLoginFunc(req, res));

router.route("/").post((req, res) => userLoginFunc(req, res));

router.route("/").put();

router.route("/").delete();

module.exports = router;

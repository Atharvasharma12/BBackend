const addNewUser = require("../mongoose/newUserSchema");
const OTPModel = require("../mongoose/otpSchema");

const conCreateAccount = async (req, res) => {
  let response = await addNewUser(req.body);
  res.send(response);
};

module.exports = conCreateAccount;

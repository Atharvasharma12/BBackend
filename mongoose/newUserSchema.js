const mongoose = require("mongoose");
const newUserModel = require("./userModel");
const { generateToken } = require("../Controller/conToken");
const OTPModel = require("../mongoose/otpSchema");

const addNewUser = async (userData) => {
  const newUser = new newUserModel({
    name: userData.userName,
    email: userData.userMail,
    password: userData.userPasswrod,
  });

  const gt = await generateToken(newUser);
  newUser["gwtToken"] = gt;

  try {
    const isUserPresent = await newUserModel.findOne({
      email: userData.userMail,
    });

    if (!isUserPresent) {
      console.log(userData);
      let checkOTP = await OTPModel.findOne({ mail: userData.userMail });
      console.log(checkOTP);
      if (userData.otp == checkOTP.otp) {
        console.log("otp verified");
        await newUser.save();
        return "Registered Successfully !";
      } else return "incorrect otp";
    } else {
      return "user already registered!";
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = addNewUser;

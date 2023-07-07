const mongoose = require("mongoose");
const newUserModel = require("./userModel");
const { generateToken } = require("../Controller/conToken");

const addNewUser = async (userData) => {

  
  const newUser = new newUserModel({
    name: userData.userName,
    email: userData.userMail,
    password: userData.userPasswrod,
    
  });
  
  const gt = await generateToken(newUser);
  newUser["gwtToken"]= gt;

  
  try {
    const isUserPresent = await newUserModel.findOne({
      email: userData.userMail,
    });
    
    if (!isUserPresent) {
      await newUser.save();
      return "Registered Successfully !";
    } else {
      return "user already registered!";
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = addNewUser;

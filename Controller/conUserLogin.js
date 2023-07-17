const mongoose = require("mongoose");
const newUserModel = require("../mongoose/userModel");

const userLoginFunc = async (req, res) => {
  try {
    const { userMail, userPasswrod } = req.body;
    console.log("landed");

    const isUserPresent = await newUserModel.findOne({ email: userMail });
    if (isUserPresent) {
      if (
        isUserPresent.email == userMail &&
        isUserPresent.password == userPasswrod
      ) {
        res.cookie("jwt", isUserPresent.gwtToken);

        console.log(userMail);
        res.send({
          message: "login successfull !",
          _id: isUserPresent._id,
          name: isUserPresent.name,
          email: isUserPresent.email,
          token: isUserPresent.gwtToken,
        });
      } else res.send({ message: "incorrect password !!!" });
    } else res.send({ message: "Username not found !!!" });
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = userLoginFunc;

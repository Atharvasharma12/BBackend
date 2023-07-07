const jwt = require("jsonwebtoken");
const newUserModel = require("../mongoose/userModel");

const auth = async (req, res, next) => {
  try {
    const CookieToken = req.cookies.jwt;

    const isVerified = jwt.verify(CookieToken, process.env.JWT_SECRET_KEY);

    const loggedInUser = await newUserModel.findOne({ _id: isVerified._id });

    if (loggedInUser) {
      console.log("authorized")
      next();
    }
  } catch (error) {
    
    res.status(401).send(error);
  }
};

module.exports = auth;

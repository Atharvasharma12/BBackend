const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const generateToken = async (newUser) => {
  const token = jwt.sign(
    { _id: newUser._id, name: newUser.name, emailId: newUser.email },
    process.env.JWT_SECRET_KEY
  );

  console.log("token generated", token);
  return token;
};

const validateToken = (req, res) => {
  const isVerified = jwt.verify(
    req.headers.authorization,
    process.env.JWT_SECRET_KEY
  );
  console.log("token verified");
  res.send(isVerified);
};

module.exports = { generateToken, validateToken };

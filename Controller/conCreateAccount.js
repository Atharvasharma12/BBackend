const addNewUser = require("../mongoose/newUserSchema");

const conCreateAccount = async (req, res) => {
  // console.log(req.body)

  let response = await addNewUser(req.body);
  res.send(response);
};

module.exports = conCreateAccount;

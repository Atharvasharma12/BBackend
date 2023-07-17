

const conLogout = async (req, res) => {
  try {
    res.clearCookie("jwt");
    console.log("logout success");
    res.send("loggout successfully !!!");
  } catch (error) {}
};

module.exports = conLogout;

const { configDotenv } = require("dotenv");
const OTPModel = require("../mongoose/otpSchema");
const nodemailer = require("nodemailer");
const userModel = require("../mongoose/userModel");
configDotenv();
const SendOTP = async (req, res) => {
  const { userMail } = req.body;
  const newROTP = Math.floor(Math.random() * 100000 + 100000);
  const newOTP = new OTPModel({
    mail: userMail,
    otp: newROTP,
    createdAt: new Date(),
  });

  try {
    const s = await newOTP.save();

    const p = await userModel.findOne({ email: userMail });
    if (p == null) {
      ("use strict");

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        // host: "smtp.ethereal.email",

        port: 587,
        auth: {
          user: process.env.B_MAIL,
          pass: process.env.B_MAIL_PASSWORD,
        },
      });

      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: process.env.B_MAIL, // sender address
          to: userMail, // list of receivers
          subject: "Boekenza verification code", // Subject line
          text: `your verificatoin code is ${newROTP}`, // plain text body
          html: `<b>your verificatoin code is ${newROTP}</b>`, // html body
        });

        res.send("OTP sent");
        // console.log("Message sent: %s", info.messageId, newROTP);
        // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      }
      main().catch(console.error);
    } else {
      res.send("user already present");
    }
  } catch (error) {
    res.send("Mail not sent");
    console.log(error);
  }
};

module.exports = SendOTP;

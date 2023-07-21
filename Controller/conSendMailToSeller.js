const userModel = require("../mongoose/userModel");
const nodemailer = require("nodemailer");
const SendMailToSeller = async (req, res) => {
  const {
    productName,
    productCategory,
    productDescription,
    productPrice,
    productImg,
    sellerId,
    emailId,
    name,
  } = req.body;

  try {
    const userDetail = await userModel.findOne({ _id: sellerId });

    const transporter = nodemailer.createTransport({
      service: "Gmail",
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
        to: userDetail.email, // list of receivers
        subject: "Buyer from Boekenza", // Subject line
        text: `Hello dear seller, we have found buyer for your product.
        PRODUCT NAME : ${productName} 
        CATEGORY :  ${productCategory} 
        DISCRIPITON : ${productDescription}
        PRICE : Rs.${productPrice}/-
        IMAGE- ${productImg}

        Buyer's Information - 
        Name : ${name}
        Email : ${emailId}`, // plain text body
      });

      res.send("Mail sent to buyer");
    }

    main().catch(console.error);
  } catch (error) {
    console.log(error);
  }
};

module.exports = SendMailToSeller;

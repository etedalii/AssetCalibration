const User = require("../models/User");
const nodemailer = require("nodemailer");

const sendMail = () => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "AssetCalibrationSystemCOMP231",
      pass: "SoftwareDevelopmentProject1",
    },
    tls: { rejectUnauthorized: false },
  });

  let mailOption = {
    from: "AssetCalibrationSystemCOMP231@gmail.com",
    to: "joelvargasapolinario@gmail.com",
    subject: "Testing",
    text: "First test",
  };

  transporter.sendMail(mailOption, (err, success) => {
    if (err) {
      return res.status(404).json({
        message: "err",
      });
    } else {
      return res.status(200).json({
        message: "email sent",
      });
    }
  });
};
module.exports = {
  sendMail,
};

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
      console.log(err);
    } else {
      console.log("Email sent successfully");
    }
  });
};
module.exports = {
  sendMail,
};

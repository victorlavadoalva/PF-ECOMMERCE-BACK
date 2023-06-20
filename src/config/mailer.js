const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "victorlavado15@gmail.com",
    pass: "psmdcqagslyzmtlx",
  },
});

transporter
  .verify()
  .then(() => {
    console.log("Ready for sending emails");
  })
  .catch((error) => {
    console.error("Error verifying transporter:", error);
  });
module.exports = transporter;

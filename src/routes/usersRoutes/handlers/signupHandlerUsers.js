const signupControllerUsers = require("../controllers/signupControllerUsers");
// const transporter = require("../../../config/mailer");

const transporter = require("../../../config/mailer");

const signupHandlerUsers = async (req, res) => {
  const { name, email, password, picture } = req.body;

  try {
    const signUp = await signupControllerUsers(name, email, password, picture);

    await transporter.sendMail({
      from: '"Register succesfull 👻" <victorlavado15@gmail.com>', // sender address
      to: `${email}, ${email}`, // list of receivers
      subject: "Register succesfull", // Subject line
      // text: "Hello world?", // plain text body
      html: `
      <html>
      <body style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #003366; text-align: center; padding: 20px;">
            <img src="https://res.cloudinary.com/diiu7oy9z/image/upload/v1687453406/g8levjcp6pxlxnahoemh.png" alt="Logo" style="max-width: 150px;">
          </div>
          <div style="background-color: #ffffff; padding: 20px;">
            <h1 style="color: #333; text-align: center;">Welcome to Our Platform</h1>
            <p style="color: #666;">Dear User,</p>
            <p style="color: #666;">Thank you for registering on our platform! We hope you enjoy our services.</p>
            <a href="https://pf-ecommerce-front-production.up.railway.app/" style="display: inline-block; margin-top: 20px; padding: 10px 20px; background-color: #003366; color: #ffffff; text-decoration: none; border-radius: 4px;">Go to our web</a>
          </div>
          <div style="background-color: #f5f5f5; padding: 10px; text-align: center; font-size: 12px; color: #666666;">
            <p>The Team at Our Platform</p>
          </div>
        </div>
      </body>
    </html>
      `, // html body
    });

    res.status(200).json(signUp);
  } catch (error) {
    console.log(error);
    if (error.EmailExist) {
      return res.status(400).json({ Error: "Email" });
    } else if (error.NameExist) {
      return res.status(400).json({ Error: "Name" });
    } else return res.status(500).json({ message: error.message });
  }
};

module.exports = signupHandlerUsers;

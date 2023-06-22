const signupControllerUsers = require("../controllers/signupControllerUsers");
// const transporter = require("../../../config/mailer");

const transporter = require("../../../config/mailer");

const signupHandlerUsers = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const signUp = await signupControllerUsers(name, email, password);

    await transporter.sendMail({
      from: '"Register succesfull 👻" <victorlavado15@gmail.com>', // sender address
      to: `${email}, ${email}`, // list of receivers
      subject: "Register succesfull", // Subject line
      // text: "Hello world?", // plain text body
      html: `
      <h1>Welcome to Our Platform</h1>
  <p>Dear User,</p>
  <p>Thank you for registering on our platform! We hope you enjoy our services.</p>
  <p>Best regards,</p>
  <p>The Team at Our Platform</p>
      `, // html body
    });

    res.status(200).json(signUp);
  } catch (error) {
    console.log(error);
    if (error.EmailExist) {
      return res.status(400).json({Error:"Email"})
    }else if(error.NameExist){
      return res.status(400).json({Error:"Name"})
    }else return res.status(500).json({message: error.message})
  }
};

module.exports = signupHandlerUsers;

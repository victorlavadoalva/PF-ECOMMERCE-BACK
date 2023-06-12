const signupControllerUsers = require("../controllers/signupControllerUsers");

const signupHandlerUsers = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const signUp = await signupControllerUsers(name, email, password);
    res.status(200).json(signUp);
  } catch (e) {
    if (e.code === 11000)
      return res.status(400).send("Email existente, use otro correo");
    res.status(400).send(e.message);
  }
};

module.exports = signupHandlerUsers;

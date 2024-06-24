const signupControllerUsers = require("../controllers/signupControllerUsers");

const signupHandlerUsers = async (req, res) => {
  const { name, email, password, picture } = req.body;

  try {
    const signUp = await signupControllerUsers(name, email, password, picture);

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

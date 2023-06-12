const loginControllerUsers = require("../controllers/loginControllerUsers");

const loginHandlerUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginControllerUsers(email, password);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = loginHandlerUsers;

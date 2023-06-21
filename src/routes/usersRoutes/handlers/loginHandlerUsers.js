const loginControllerUsers = require("../controllers/loginControllerUsers");
const jwt = require("jsonwebtoken");

const loginHandlerUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginControllerUsers(email, password);
    jwt.sign({ user }, "secretKey", { expiresIn: "2h" }, (err, token) => {
      // res.cookie("token", token);
      const combinedObject = { ...user._doc, token };
      console.log(combinedObject);
      res.status(200).json(combinedObject);
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = loginHandlerUsers;

const postControllerUsers = require("../controllers/postControllerUsers");

const postHandlerUsers = async (req, res) => {
  try {
    const userData = req.body;
    const userCreated = await postControllerUsers(userData);

    res.status(202).json({ msg: "User Created", userCreated });
  } catch (error) {
    if (error.code === 11000) return res.status(400).send("Email exist");
    res.status(400).send(error.message);
  }
};

module.exports = postHandlerUsers;

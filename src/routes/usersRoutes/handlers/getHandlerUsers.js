const getControllerUsers = require("../controllers/getControllerUsers");

const getHandlerUsers = async (req, res) => {
  try {
    const users = await getControllerUsers();

    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getHandlerUsers;

const getIdControllerUsers = require("../controllers/getIdControllerUsers");

const getIdHandlerUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await getIdControllerUsers(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = getIdHandlerUsers;

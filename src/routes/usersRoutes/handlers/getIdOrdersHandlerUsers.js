const getIdOrdersControllerUsers = require("../controllers/getIdOrdersControllerUsers");

const loginHandlerUsers = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await getIdOrdersControllerUsers(id);
    res.status(200).json(user.orders);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = loginHandlerUsers;

const deleteControllerUsers = require("../controllers/deleteControllerUsers");

const deleteHandlerUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const userEliminated = await deleteControllerUsers(id);

    res
      .status(202)
      .json({ msg: "User eliminated succesfully", userEliminated });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = deleteHandlerUsers;

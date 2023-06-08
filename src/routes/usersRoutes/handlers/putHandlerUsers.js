const putControllerUsers = require("../controllers/putControllerUsers");

const putHandlerUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const dataModify = req.body;

    const userModified = await putControllerUsers(id, dataModify);

    res.status(200).json({ msg: "Data Modified Succesfull", userModified });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = putHandlerUsers;

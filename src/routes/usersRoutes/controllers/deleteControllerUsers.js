const User = require("../../../db/models/User");
const parseID = require("../../../../utils/parseID");

const deleteControllerUsers = async (id) => {
  const idParsed = parseID(id);
  const userEliminated = await User.deleteOne({ _id: idParsed });

  return userEliminated;
};

module.exports = deleteControllerUsers;

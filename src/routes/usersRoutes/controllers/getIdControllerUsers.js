const parseId = require("../../../../utils/parseID");
const User = require("../../../db/models/User");

const getIdControllerUsers = async (id) => {
  const idParsed = parseId(id);
  const user = await User.find({ _id: idParsed });
  return user.shift();
};

module.exports = getIdControllerUsers;

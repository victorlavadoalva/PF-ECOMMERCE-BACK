const User = require("../../../db/models/User");

const getControllerUsers = async () => {
  const users = await User.find({ isAdmin: false }).populate("orders");

  return users;
};

module.exports = getControllerUsers;

const User = require("../../../db/models/User");

const getControllerUsers = async () => {
  console.log("entro al get controller users");
  const users = await User.find({ isAdmin: false }).populate("orders");

  return users;
};

module.exports = getControllerUsers;

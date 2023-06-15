const User = require("../../../db/models/User");

const loginControllerUsers = async (id) => {
  const user = await User.findById(id).populate("orders");

  return user;
};

module.exports = loginControllerUsers;

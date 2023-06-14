const User = require("../../../db/models/User");

const loginControllerUsers = async (email, password) => {
  console.log(email);
  console.log(password);
  const user = await User.findByCredentials(email, password);
  return user;
};

module.exports = loginControllerUsers;

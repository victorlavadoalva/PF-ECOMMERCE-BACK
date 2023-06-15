const User = require("../../../db/models/User");

const signupControllerUsers = async (name, email, password) => {
  const user = await User.create({ name, email, password });
  return user;
};

module.exports = signupControllerUsers;

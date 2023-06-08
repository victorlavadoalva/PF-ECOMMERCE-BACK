const User = require("../../../db/models/User");

const postControllerUsers = async (name, email, password) => {
  const user = await User.create({ name, email, password });

  res.json(user);
};

module.exports = postControllerUsers;

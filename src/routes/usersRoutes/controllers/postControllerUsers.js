const User = require("../../../db/models/User");

const postControllerUsers = async (data) => {
  if (!data.name || !data.password || !data.email)
    throw new Error("Missing data to post a user");

  const newUserData = {
    name: data.name,
    password: data.password,
    email: data.email,
  };

  const userCreated = await User.create(newUserData);

  return userCreated;
};

module.exports = postControllerUsers;

const User = require("../../../db/models/User");

const signupControllerUsers = async (name, email, password, picture) => {
  const foundEmail = await User.findOne({ email });
  if (foundEmail) {
    const error = new Error("Email ya existe");
    error.EmailExist = true;
    throw error;
  }
  const foundName = await User.findOne({ name });
  if (foundName) {
    const error = new Error("Name ya existe");
    error.NameExist = true;
    throw error;
  }
  const user = await User.create({
    name,
    email,
    password,
    profilePicture: picture,
  });
  console.log(user);
  return user;
};

module.exports = signupControllerUsers;

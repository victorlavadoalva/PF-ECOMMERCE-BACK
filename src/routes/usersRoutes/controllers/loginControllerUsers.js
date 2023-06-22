const User = require("../../../db/models/User");
const bcrypt = require("bcrypt");
const USER_NOT_FOUND = "USER_NOT_FOUND"
const PASSOWORD_INCORRECT = "PASSOWORD_INCORRECT"
const loginControllerUsers = async (email, password) => {
  console.log(email);
  console.log(password);
  const userFound = await User.findOne({email});
  if(!userFound) return USER_NOT_FOUND
  const isMatch = await bcrypt.compare(password, userFound.password)
  if(!isMatch) return PASSOWORD_INCORRECT
  return userFound;
};

module.exports = {
  loginControllerUsers,
  USER_NOT_FOUND,
  PASSOWORD_INCORRECT
};

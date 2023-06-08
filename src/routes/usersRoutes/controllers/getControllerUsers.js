const User = require("../../../db/models/User");

const getControllerUsers = async () => {
  const usersData = await User.find().sort({ name: -1 });
  if (!usersData.length) throw new Error("No Users Found");

  const data = usersData.map((user) => {
    return {
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      cart: user.cart,
    };
  });

  return data;
};

module.exports = getControllerUsers;

const User = require("../../../db/models/User");

const removeFromCartController = async (userId, productId, price) => {
  const user = await User.findById(userId);
  const userCart = user.cart;
  userCart.total -= Number(userCart[productId]) * Number(price);
  userCart.count -= userCart[productId];
  delete userCart[productId];
  user.cart = userCart;
  user.markModified("cart");
  await user.save();

  return user;
};

module.exports = removeFromCartController;

const User = require("../../../db/models/User");

const decreaseToCartController = async (userId, productId, price) => {
  const user = await User.findById(userId);
  const userCart = user.cart;
  userCart.total -= Number(price);
  userCart.count -= 1;
  userCart[productId] -= 1;
  user.cart = userCart;
  user.markModified("cart");
  await user.save();

  return user;
};

module.exports = decreaseToCartController;

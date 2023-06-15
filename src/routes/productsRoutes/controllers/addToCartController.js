const User = require("../../../db/models/User");

const addToCartController = async (userId, productId, price) => {
  const user = await User.findById(userId);
  const userCart = user.cart;
  if (user.cart[productId]) {
    userCart[productId] += 1;
  } else {
    userCart[productId] = 1;
  }
  userCart.count += 1;
  userCart.total = Number(userCart.total) + Number(price);
  user.cart = userCart;
  user.markModified("cart");
  await user.save();

  return user;
};

module.exports = addToCartController;

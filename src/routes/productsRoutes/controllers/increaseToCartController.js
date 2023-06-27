const User = require("../../../db/models/User");

const increaseToCartController = async (userId, productId, price, stock) => {
  const user = await User.findById(userId);
  const userCart = user.cart;

  if(userCart[productId] <= stock-1){
    userCart.total += Number(price);
    userCart.count += 1;
    userCart[productId] += 1;
    user.cart = userCart;
    user.markModified("cart");
    await user.save();
  }
  
  return user;
};

module.exports = increaseToCartController;

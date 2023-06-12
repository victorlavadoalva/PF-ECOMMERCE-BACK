const decreaseToCartController = require("../controllers/decreaseToCartController");
const decreaseToCartHandler = async (req, res) => {
  try {
    const { userId, productId, price } = req.body;
    console.log(userId, productId, price);
    const user = await decreaseToCartController(userId, productId, price);
    res.status(202).json(user);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = decreaseToCartHandler;

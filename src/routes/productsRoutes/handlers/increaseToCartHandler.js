const increaseToCartController = require("../controllers/increaseToCartController");
const increaseToCartHandler = async (req, res) => {
  try {
    const { userId, productId, price } = req.body;
    const user = await increaseToCartController(userId, productId, price);
    res.status(202).json(user);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = increaseToCartHandler;

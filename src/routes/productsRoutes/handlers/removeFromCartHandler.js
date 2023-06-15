const remoteFromCartController = require("../controllers/removeFromCartController");
const removeFromCartHandler = async (req, res) => {
  try {
    const { userId, productId, price } = req.body;
    const user = await remoteFromCartController(userId, productId, price);
    res.status(202).json(user);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = removeFromCartHandler;

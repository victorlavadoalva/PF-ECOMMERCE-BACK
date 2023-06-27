const postControllerProducts = require("../controllers/postControllerProducts");

const postHandlerProducts = async (req, res) => {
  try {
    const productData = req.body;
    const productCreated = await postControllerProducts(productData);
    res.status(202).json({ productCreated });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};
 
module.exports = postHandlerProducts;

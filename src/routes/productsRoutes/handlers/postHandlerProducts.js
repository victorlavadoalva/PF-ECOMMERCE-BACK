const postControllerProducts = require("../controllers/postControllerProducts");

const postHandlerProducts = async (req, res) => {
  try {
    console.log("Entro al postHandlerProducts");
    const productData = req.body;
    console.log("req.body es: ", req.body);
    const productCreated = await postControllerProducts(productData);
    res.status(202).json({ productCreated });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = postHandlerProducts;

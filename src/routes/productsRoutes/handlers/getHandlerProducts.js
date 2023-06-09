const getControllerProducts = require("../controllers/getControllerProducts");

const getHandlerProducts = async (req, res) => {
  const { name } = req.query;

  try {
    const productsData = await getControllerProducts(name);
    res.status(200).json(productsData);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = getHandlerProducts;

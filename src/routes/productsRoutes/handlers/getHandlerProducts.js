const {getControllerProducts, filterCategoryFunction, filterPlatformFunction, filterPriceFunction} = require("../controllers/getControllerProducts");
const { categories } = require("../../../../utils/categryPlatform");

const getHandlerProducts = async (req, res) => {
  const { name, filterCategory, filterPlatform, filterPrice } = req.query;

  try {

    let productsData = await getControllerProducts(name);

    if(filterCategory){
      productsData = filterCategoryFunction(productsData, filterCategory);
    }
    if(filterPlatform){
      productsData = filterPlatformFunction(productsData, filterPlatform);
    }
    if(filterPrice){
      productsData = filterPriceFunction(productsData, filterPrice)
    }

    res.status(200).json(productsData);
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

module.exports = getHandlerProducts;

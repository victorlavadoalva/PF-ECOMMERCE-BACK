const products = require("../../../db/models/Product");

const postControllerProducts = async (data) => {
  if (
    !data.name ||
    !data.description ||
    !data.price ||
    !data.category ||
    !data.platform ||
    !data.stock
  )
    throw new Error("Missing data to post a product");
  const newProductData = {
    name: data.name,
    description: data.description,
    price: data.price,
    category: data.category,
    platform: data.platform,
    stock: data.stock,
  };
  const productCreated = await products.create(newProductData);

  const transformedProduct = {
    name: productCreated.name,
    description: productCreated.description,
    price: productCreated.price,
    platform: productCreated.platform,
    category: productCreated.category,
    stock: productCreated.stock,
    __v: 0,
  };

  console.log(transformedProduct);
  return transformedProduct;
};

module.exports = postControllerProducts;

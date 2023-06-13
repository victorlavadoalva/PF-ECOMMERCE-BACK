const products = require("../../../db/models/Product");

const getControllerProducts = async (name) => {
  if (name !== undefined) {
    console.log("entro al IF 1");
    //regex para no tener en cuenta mayus y minus
    const regex = new RegExp(name, "i");

    const productByName = await products.find({
      name: regex,
    });
    if (productByName.length === 0) {
      throw new Error(`No se encontró el producto buscado: ${name}`);
    }
    return [...productByName];
  } else {
    console.log("entro al IF2");

    const productsData = await products.find().sort({ name: -1 });
    if (!productsData.length) throw new Error("No Products Found");

    const data = productsData.map((product) => {
      return {
        id: product._id,
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        platform: product.platform,
        pictures: product.pictures,
        stock: product.stock || 0,
      };
    });

    return data;
  }
};

module.exports = getControllerProducts;

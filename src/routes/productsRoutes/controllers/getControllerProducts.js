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

const filterCategoryFunction = (data, filterCategory) => {
  const categoriesForFilter = filterCategory.toLowerCase().split("-")

  const productFilter = data.filter((product) => {
    for(let i = 0; i < categoriesForFilter.length; i++){
      if(product.category.toLowerCase() == categoriesForFilter[i]) return true
    }
    return false;
  });
  return productFilter;
}

const filterPlatformFunction = (data, filterPlatform) => {
  const platformsForFilter = filterPlatform.toLowerCase().split("-");

  const productFilter = data.filter((product) => {
    for(let i = 0; i < platformsForFilter.length; i++){
      if(product.platform.toLowerCase() == platformsForFilter[i]) return true
    }
    return false;
  });

  return productFilter;

};

const filterPriceFunction = (data, filterPrice) => {

  const arrNumbers = filterPrice.split("-");

  const minPrice = parseFloat(arrNumbers[0]);
  const maxPrice = parseFloat(arrNumbers[1]);


  const filteredProducts = data.filter((product) => {
    const productPrice = product.price;
    return productPrice >= minPrice && productPrice <= maxPrice;
  });

  return filteredProducts;
}

module.exports = {
  getControllerProducts,
  filterCategoryFunction,
  filterPlatformFunction,
  filterPriceFunction
};

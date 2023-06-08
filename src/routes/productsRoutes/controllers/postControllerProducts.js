const products = require("../../../db/models/Product");

const postControllerProducts = async (data) => {
    if(!data.name || !data.description || !data.price || !data.category || !data.pictures.length) throw new Error("Missing data to post a product");
    const newProductData = {
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        pictures: data.pictures
    }
    const productCreated = await products.create(newProductData);

    return productCreated;
};

module.exports = postControllerProducts;
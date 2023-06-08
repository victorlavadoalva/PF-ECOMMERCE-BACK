const products = require("../../../db/models/Product");

const getControllerProducts = async () => {
    const productsData = await products.find().sort({name:-1});
    if(!productsData.length) throw new Error("No Products Found");
    
    const data = productsData.map((product) => {
        return{
            id: product._id,
            name: product.name,
            description: product.description,
            price: product.price,
            category: product.category,
            pictures: product.pictures,
            stock: product.stock || 0
        }
    })

    return data;
};

module.exports = getControllerProducts;
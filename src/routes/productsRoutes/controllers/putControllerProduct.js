const products = require("../../../db/models/Product");
const parseID = require("../../../../utils/parseID");

const putControllerProduct = async (id, data) => {
    if(!id) throw new Error("Enter an id");
    const galleta = data.name || data.description || data.price || data.category || data.pictures || data.stock;
    if(!galleta) throw new Error("Enter data to modify");

    const idParsed = parseID(id);

    const dataModify = await products.findByIdAndUpdate(idParsed,{
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        pictures: data.pictures,
        stock: data.stock
    })

    return dataModify;

};

module.exports = putControllerProduct;
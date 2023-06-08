const products = require("../../../db/models/Product");
const parseId = require("../../../../utils/parseID");

const getIdControllerProduct = async (id) => {
    const idParsed = parseId(id);
    const product = await products.find({_id:idParsed});
    return product.shift();
};

module.exports = getIdControllerProduct;
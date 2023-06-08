const products = require("../../../db/models/Product");
const parseID = require("../../../../utils/parseID");

const deleteController = async (id) => {
    const idParsed = parseID(id);
    const productEliminated = await products.deleteOne({_id:idParsed});

    return productEliminated;
};

module.exports = deleteController;
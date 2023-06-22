const Product = require("../../../db/models/Product");
const parseID = require("../../../../utils/parseID");

const putControllerProduct = async (id, data) => {
    if(!id) throw new Error("Enter an id");
    const galleta = data.name || data.description || data.price || data.category || data.pictures || data.stock;
    if(!galleta) throw new Error("Enter data to modify");

    const idParsed = parseID(id);

    const dataModify = await Product.findByIdAndUpdate(idParsed,{
        name: data.name,
        description: data.description,
        price: data.price,
        category: data.category,
        pictures: data.pictures,
        stock: data.stock
    })

    return dataModify;

};


const putValorations = async(id, data) => {
    if(!id) throw new Error("Enter an id");
    if(!data) throw new Error("Enter valoration to add");

    const idParsed = parseID(id);

    const valoration = {
        id_cliente: parseID(data.id_cliente),
        comment: data.comment,
        rating: Number(data.rating),
        date: Date(data.date)
    };

    const dataModify = await Product.findByIdAndUpdate(
        idParsed,
        {
            $addToSet:{valorations:valoration}
        },
    ).exec();

    return dataModify;
}

module.exports = {
    putControllerProduct,
    putValorations
};
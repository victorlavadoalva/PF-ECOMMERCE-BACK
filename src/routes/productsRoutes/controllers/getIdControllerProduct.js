const products = require("../../../db/models/Product");
const parseId = require("../../../../utils/parseID");
const user = require('../../../db/models/User');

// const getIdControllerProduct = async (id) => {
//     const idParsed = parseId(id);
//     user.find();
//     const product = await products.findById(idParsed).populate('valorations.id_cliente');
//     return product;
// };

const getIdControllerProduct = async (id) => {
    const idParsed = parseId(id);
    const product = await products.findById(idParsed).exec();
    
    await products.populate(product, {
      path: 'valorations.id_cliente',
      model: 'User',
      select: 'name email'
    });
    
    return product;
};
  
  

module.exports = getIdControllerProduct;
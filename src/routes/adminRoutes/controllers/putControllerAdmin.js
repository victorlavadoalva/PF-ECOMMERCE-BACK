const products = require('../../../db/models/Product');
const users = require('../../../db/models/User');
const parseId = require('../../../../utils/parseID');

const putControllerAdmin = async (id, type, isActive) => {
    
    const idParsed = parseId(id);
    const status = isActive == 'true' ? true : false
    
    if(type === 'product'){
        const product = await products.findByIdAndUpdate(
            idParsed,
            {
                isActive:!status
            }
            ).exec();
            
        return product
    }else if(type === 'user'){
        const product = await users.findByIdAndUpdate(
            idParsed,
            {
                isActive:!status
            }
            ).exec();
            
        return product
    }else{
        throw new Error('Type incorrect');
    }
}

module.exports  = putControllerAdmin;
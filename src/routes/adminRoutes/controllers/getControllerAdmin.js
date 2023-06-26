const products = require('../../../db/models/Product');
const users = require('../../../db/models/User');

const getinfoAdmin = async () => {

    const productsAll = await products.find();
    const usersAll = await users.find();

    return {
        productsAll,
        usersAll
    }; 
};

module.exports = getinfoAdmin;
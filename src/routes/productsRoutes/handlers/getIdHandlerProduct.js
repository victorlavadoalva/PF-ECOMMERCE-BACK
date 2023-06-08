const getIdControllerProduct = require("../controllers/getIdControllerProduct");

const getIdHandlerProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await getIdControllerProduct(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(400).json({ err:error.message })
    }
};

module.exports = getIdHandlerProduct;
const putControllerProduct = require("../controllers/putControllerProduct");

const putHandlerProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const dataModify = req.body;

        const productModified = await putControllerProduct(id, dataModify);

        res.status(200).json({ msg:"Data Modified Succesfull", productModified });
    } catch (error) {
        res.status(400).json({ err:error.message });
    }
};

module.exports = putHandlerProduct;
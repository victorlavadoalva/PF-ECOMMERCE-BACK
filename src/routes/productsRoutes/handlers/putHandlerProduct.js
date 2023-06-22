const {putControllerProduct, putValorations} = require("../controllers/putControllerProduct");

const putHandlerProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const dataModify = req.body;
        let indicador;
        let productModified;
        for(bandera in dataModify){
            if(bandera == 'valorations'){
                indicador = await putValorations(id,dataModify.valorations)
            }
        }

        if(!indicador) productModified = await putControllerProduct(id, dataModify);

        res.status(200).json({ msg:"Data Modified Succesfull"});
    } catch (error) {
        res.status(400).json({ err:error.message });
    }
};

module.exports = putHandlerProduct;
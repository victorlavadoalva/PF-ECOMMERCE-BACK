const putControllerAdmin = require('../controllers/putControllerAdmin')

const putHandlerAdmin = async(req, res) =>{
    try{
        // const {isAdmin} = req.user;
        //* http://localhosst:3001/admin/numero_id?type=user o product&isActive=true
        const {type, isActive} = req.query;
        const {id} = req.params;

        const isAdmin = true;

        if(isAdmin){
            let info = await putControllerAdmin(id, type, isActive);
            res.status(200).json(info);
        }else{
            throw new Error('Invalid Token')
        }
    }catch(err){
        res.status(400).json({error:err.message})
    }
}

module.exports = putHandlerAdmin;
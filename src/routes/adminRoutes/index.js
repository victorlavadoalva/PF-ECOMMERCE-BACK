const { Router } = require("express");
const getHandlerAdmin = require('./handlers/getHandlerAdmin');
const putHandlerAdmin = require('./handlers/putHandlerAdmin')
// const verifyToken = require('../../utils/jwt')

const api = Router();

api.get("/", getHandlerAdmin);

api.put("/:id", putHandlerAdmin);


module.exports = api;
const { Router } = require("express");
const getHandlerUser = require("./handlers/getHandlerUsers");

const api = Router();

api.get("/", getHandlerUser);

module.exports = api;

const { Router } = require("express");
const getHandlerUser = require("./handlers/getHandlerUsers");

const api = Router();

api.get("/", getHandlerUser);
// api.post("/", postHandlerUser);

module.exports = api;

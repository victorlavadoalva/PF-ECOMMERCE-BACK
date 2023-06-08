const { Router } = require("express");
const getHandlerUsers = require("./handlers/getHandlerUsers");
const postHandlerUsers = require("./handlers/postHandlerUsers");

const api = Router();

api.get("/", getHandlerUsers);
api.post("/", postHandlerUsers);

module.exports = api;

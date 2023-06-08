const { Router } = require("express");
const getHandlerUsers = require("./handlers/getHandlerUsers");
const postHandlerUsers = require("./handlers/postHandlerUsers");
const deleteHandlerUsers = require("./handlers/deleteHandlerUsers");
const getIdHandlerUsers = require("./handlers/getIdHandlerUsers");
const putHandlerUsers = require("./handlers/putHandlerUsers");

const api = Router();

// ? Ruta GET para Users
api.get("/", getHandlerUsers);

// ? Ruta GET por id para Users
api.get("/:id", getIdHandlerUsers);

// ? Ruta POST Para Users
api.post("/", postHandlerUsers);

// ? Ruta PUT para Productos
api.put("/:id", putHandlerUsers);

// ? Ruta DELETE para productos
api.delete("/:id", deleteHandlerUsers);

module.exports = api;

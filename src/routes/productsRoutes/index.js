const { Router } = require("express");
const getHandlerProducts = require("./handlers/getHandlerProducts");
const postHandlerProducts = require("./handlers/postHandlerProducts");
const getIdHandlerProduct = require("./handlers/getIdHandlerProduct");
const putHandlerProduct = require("./handlers/putHandlerProduct");
const deleteHandler = require("./handlers/deleteHandler");

const api = Router();

// ? Ruta GET para Productos
api.get("/", getHandlerProducts);

// ? Ruta GET por id para Productos
api.get("/:id", getIdHandlerProduct);

// ? Ruta POST Para Productos
api.post("/", postHandlerProducts);

// ? Ruta PUT para Productos
api.put("/:id", putHandlerProduct);

// ? Ruta DELETE para productos
api.delete("/:id", deleteHandler);


module.exports = api;

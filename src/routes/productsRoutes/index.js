const { Router } = require("express");
const getHandlerProducts = require("./handlers/getHandlerProducts");
const postHandlerProducts = require("./handlers/postHandlerProducts");
const getIdHandlerProduct = require("./handlers/getIdHandlerProduct");
const putHandlerProduct = require("./handlers/putHandlerProduct");
const deleteHandler = require("./handlers/deleteHandler");
const addToCartHandler = require("./handlers/addToCartHandler");
const decreaseToCartHandler = require("./handlers/decreaseToCartHandler");
const removeFromCartHandler = require("./handlers/removeFromCartHandler");
const increaseToCartHandler = require("./handlers/increaseToCartHandler");

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

// Ruta para Agregar producto en carrito
api.post("/add-to-cart", addToCartHandler);

// Ruta para incrementar producto en carrito
api.post("/increase-cart", increaseToCartHandler);

//Ruta para decrementar el producto del carrito
api.post("/decrease-cart", decreaseToCartHandler);

//Ruta para remover del carrito
api.post("/remove-from-cart", removeFromCartHandler);

module.exports = api;

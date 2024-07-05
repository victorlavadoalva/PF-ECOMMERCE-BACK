const { Router } = require("express");
const postIngresoHandlerBathroom = require("./handlers/postIngresoHandlerBathroom");
const postSalidaHandlerBathroom = require("./handlers/postSalidaHandlerBathroom");
const getHandlerBathroom = require("./handlers/getHandlerBathroom");

const api = Router();
// POST para registrar entrada al baño
api.post("/ingreso-bano", postIngresoHandlerBathroom);

// POST para registrar salida del baño
api.post("/salida-bano", postSalidaHandlerBathroom);

api.get("/", getHandlerBathroom);

module.exports = api;

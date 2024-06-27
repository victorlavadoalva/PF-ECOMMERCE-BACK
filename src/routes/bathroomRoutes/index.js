const { Router } = require("express");
const postIngresoHandlerBathroom = require("./handlers/postIngresoHandlerBathroom");
const postSalidaHandlerBathroom = require("./handlers/postSalidaHandlerBathroom");

const api = Router();
// POST para registrar entrada al baño
api.post("/ingreso-bano", postIngresoHandlerBathroom);

// POST para registrar salida del baño
api.post("/salida-bano", postSalidaHandlerBathroom);

module.exports = api;

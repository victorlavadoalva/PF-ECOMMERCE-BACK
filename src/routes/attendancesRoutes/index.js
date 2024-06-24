const { Router } = require("express");
const getHandlerAttendances = require("./handlers/getHandlerAttendances");
// const postSalidaHandlerHandlerAttendances = require("../handlers/postSalidaHandlerHandlerAttendances");
const postIngresoHandlerAttendances = require("./handlers/postIngresoHandlerAttendances");

const api = Router();

// POST para registrar hora de entrada
api.post("/ingreso", postIngresoHandlerAttendances);

// // POST para registrar hora de salida
// api.post("/salida", postSalidaHandlerHandlerAttendances);

// GET para obtener el reporte de asistencia de un usuario
api.get("/", getHandlerAttendances);

module.exports = api;

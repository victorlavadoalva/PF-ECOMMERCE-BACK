const Attendance = require("../../../db/models/Attendance");

const getControllerAttendances = async (usuarioId) => {
  const attendances = await Attendance.find({ usuario: usuarioId }).select(
    "fecha horaEntrada horaSalida"
  );

  if (!attendances || attendances.length === 0) {
    throw {
      status: 404,
      message: "No se encontraron registros de asistencia para el usuario dado",
    };
  }

  return attendances;
};

module.exports = getControllerAttendances;

const Attendance = require("../../../db/models/Attendance");

const postSalidaControllerAttendances = async (usuarioId) => {
  const today = new Date();
  const dia = String(today.getDate()).padStart(2, "0");
  const mes = String(today.getMonth() + 1).padStart(2, "0");
  const anio = today.getFullYear();
  const fecha = `${dia}/${mes}/${anio}`;

  const horaSalida = today.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Verificar si ya existe un registro de entrada para el usuario en la fecha actual
  const existingAttendance = await Attendance.findOne({
    usuario: usuarioId,
    fecha: fecha,
  });
  if (!existingAttendance) {
    throw {
      status: 400,
      message:
        "No se encontró un registro de ingreso para el usuario en el día de hoy.",
    };
  }

  // Verificar si ya se ha registrado la hora de salida
  if (existingAttendance.horaSalida) {
    throw {
      status: 400,
      message:
        "El usuario ya ha registrado la hora de salida para el día de hoy.",
    };
  }

  existingAttendance.horaSalida = horaSalida;
  await existingAttendance.save();
  return existingAttendance;
};

module.exports = postSalidaControllerAttendances;

const Attendance = require("../../../db/models/Attendance");

const postIngresoControllerAttendances = async (usuarioId, nombreUsuario) => {
  const today = new Date();
  const dia = String(today.getDate()).padStart(2, "0");
  const mes = String(today.getMonth() + 1).padStart(2, "0");
  const anio = today.getFullYear();
  const fecha = `${dia}/${mes}/${anio}`;

  const horaEntrada = today.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Verificar si ya existe un registro para el usuario en la fecha actual
  const existingAttendance = await Attendance.findOne({
    usuario: usuarioId,
    fecha: fecha,
  });
  if (existingAttendance) {
    throw {
      status: 400,
      message: "El usuario ya tiene un registro de ingreso para el día de hoy.",
    };
  }

  const nuevaAsistencia = new Attendance({
    usuario: usuarioId,
    nombre: nombreUsuario,
    fecha: fecha,
    horaEntrada: horaEntrada,
  });

  await nuevaAsistencia.save();
  return nuevaAsistencia;
};

module.exports = postIngresoControllerAttendances;

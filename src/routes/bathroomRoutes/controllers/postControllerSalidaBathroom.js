const Bathroom = require("../../../db/models/Bathroom");

const postControllerSalidaBathroom = async (usuarioId) => {
  const today = new Date();
  const dia = String(today.getDate()).padStart(2, "0");
  const mes = String(today.getMonth() + 1).padStart(2, "0");
  const anio = today.getFullYear();
  const fecha = `${dia}/${mes}/${anio}`;

  const horaSalida = today.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const existingBathroom = await Bathroom.findOne({
    usuario: usuarioId,
    fecha,
  });
  if (!existingBathroom) {
    throw {
      status: 400,
      message:
        "No se encontró un registro de entrada al baño para el usuario en el día de hoy.",
    };
  }

  const lastRegistro =
    existingBathroom.registros[existingBathroom.registros.length - 1];
  if (!lastRegistro || lastRegistro.horaSalida) {
    throw {
      status: 400,
      message:
        "Debe registrar una entrada al baño antes de registrar una salida.",
    };
  }

  lastRegistro.horaSalida = horaSalida;
  await existingBathroom.save();

  return existingBathroom;
};

module.exports = postControllerSalidaBathroom;

const Bathroom = require("../../../db/models/Bathroom");

const postControllerIngresoBathroom = async (usuarioId) => {
  const today = new Date();
  const dia = String(today.getDate()).padStart(2, "0");
  const mes = String(today.getMonth() + 1).padStart(2, "0");
  const anio = today.getFullYear();
  const fecha = `${dia}/${mes}/${anio}`;

  const horaEntrada = today.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
  });

  let existingBathroom = await Bathroom.findOne({ usuario: usuarioId, fecha });

  if (!existingBathroom) {
    existingBathroom = new Bathroom({
      usuario: usuarioId,
      fecha,
      registros: [],
    });
  }

  const lastRegistro =
    existingBathroom.registros[existingBathroom.registros.length - 1];
  if (lastRegistro && !lastRegistro.horaSalida) {
    throw {
      status: 400,
      message:
        "Debe registrar una salida del baño antes de registrar otra entrada.",
    };
  }

  existingBathroom.registros.push({ horaEntrada });
  await existingBathroom.save();

  return existingBathroom;
};

module.exports = postControllerIngresoBathroom;

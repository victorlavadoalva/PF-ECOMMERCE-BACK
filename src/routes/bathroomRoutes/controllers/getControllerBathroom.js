const Bathroom = require("../../../db/models/Bathroom");
// Función para formatear la fecha al formato DD/MM/YYYY
const formatDateToDDMMYYYY = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const getControllerBathroom = async (usuarioId) => {
  // Obtener la fecha actual en formato DD/MM/YYYY
  const currentDate = formatDateToDDMMYYYY(new Date());

  // Buscar registros en la base de datos y usar .lean() para obtener objetos JavaScript en lugar de documentos Mongoose
  const bathrooms = await Bathroom.find({
    usuario: usuarioId,
    fecha: currentDate,
  })
    .select("fecha registros")
    .lean();

  if (!bathrooms || bathrooms.length === 0) {
    return []; // Devolvemos un array vacío si no hay registros
  }

  // Eliminar el campo _id de cada documento
  const result = bathrooms.map((bathroom) => {
    delete bathroom._id;
    return bathroom;
  });

  return result;
};
module.exports = getControllerBathroom;

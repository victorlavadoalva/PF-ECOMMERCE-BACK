const postIngresoControllerAttendances = require("../controllers/postIngresoControllerAttendances");

const postIngresoHandlerAttendances = async (req, res) => {
  const { usuarioId, nombreUsuario } = req.body;
  try {
    const nuevaAsistencia = await postIngresoControllerAttendances(
      usuarioId,
      nombreUsuario
    );
    res.status(201).json(nuevaAsistencia);
  } catch (error) {
    console.log("Error:", error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = postIngresoHandlerAttendances;

const postSalidaControllerAttendances = require("../../controllers/attendance/postSalidaController");

const postSalidaHandlerHandlerAttendances = async (req, res) => {
  const { usuarioId } = req.body;
  try {
    const updatedAttendance = await postSalidaControllerAttendances(usuarioId);
    res.json(updatedAttendance);
  } catch (error) {
    console.error("Error:", error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = postSalidaHandlerHandlerAttendances;

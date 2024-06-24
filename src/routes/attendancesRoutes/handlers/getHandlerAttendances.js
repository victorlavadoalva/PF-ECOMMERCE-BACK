const getControllerAttendances = require("../controllers/getControllerAttendances");

const getHandlerAttendances = async (req, res) => {
  const { usuarioId } = req.query;
  try {
    const attendances = await getControllerAttendances(usuarioId);
    res.json(attendances);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = getHandlerAttendances;

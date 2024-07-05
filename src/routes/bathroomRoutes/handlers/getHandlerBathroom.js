const getControllerBathroom = require("../controllers/getControllerBathroom");

const getHandlerBathroom = async (req, res) => {
  const { usuarioId } = req.query;
  try {
    const bathroom = await getControllerBathroom(usuarioId);
    res.json(bathroom);
  } catch (error) {
    console.error("Error:", error);
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = getHandlerBathroom;

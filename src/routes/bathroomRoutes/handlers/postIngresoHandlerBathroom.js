const postControllerIngresoBathroom = require("../controllers/postControllerIngresoBathroom");

const postIngresoHandlerBathroom = async (req, res) => {
  const { usuarioId } = req.body;
  try {
    const bathroomRecord = await postControllerIngresoBathroom(usuarioId);
    res.status(201).json(bathroomRecord);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = postIngresoHandlerBathroom;

const postControllerSalidaBathroom = require("../controllers/postControllerSalidaBathroom");

const postSalidaHandlerBathroom = async (req, res) => {
  const { usuarioId } = req.body;

  try {
    const bathroomRecord = await postControllerSalidaBathroom(usuarioId);
    res.json(bathroomRecord);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = postSalidaHandlerBathroom;

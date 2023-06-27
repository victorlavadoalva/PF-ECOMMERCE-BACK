const modifyFavoritesController = require("../controllers/modifyFavoritesControllerUsers");

const modifyFavoritesHandler = async (req, res) => {
    // console.log("entra a hanlder")
  try {
    const { userId, favorites, type } = req.body;
    const user = await modifyFavoritesController(userId, favorites, type);
    res.status(202).json(user);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = modifyFavoritesHandler;

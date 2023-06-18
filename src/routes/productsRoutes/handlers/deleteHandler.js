const deleteController = require("../controllers/deleteController");

const deleteHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id } = req.body;
    const productEliminated = await deleteController(id);

    res
      .status(202)
      .json({ msg: "Product eliminated succesfully", productEliminated });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

module.exports = deleteHandler;

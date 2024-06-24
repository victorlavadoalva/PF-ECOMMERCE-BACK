const mongoose = require("mongoose");

const LunchSchema = mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fecha: {
      type: String,
      required: true,
    },
    horaInicioAlmuerzo: {
      type: String,
    },
    horaFinAlmuerzo: {
      type: String,
    },
  },
  { minimize: false }
);

LunchSchema.index({ usuario: 1, fecha: 1 }, { unique: true });

const Lunch = mongoose.model("Lunch", LunchSchema);

module.exports = Lunch;

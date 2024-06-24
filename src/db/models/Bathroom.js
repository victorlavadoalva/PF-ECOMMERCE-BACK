const mongoose = require("mongoose");

const BathroomSchema = mongoose.Schema(
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
    registros: [
      {
        horaEntrada: {
          type: String,
        },
        horaSalida: {
          type: String,
        },
      },
    ],
  },
  { minimize: false }
);

const Bathroom = mongoose.model("Bathroom", BathroomSchema);

module.exports = Bathroom;

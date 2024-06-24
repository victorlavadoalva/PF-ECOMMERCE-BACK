const mongoose = require("mongoose");
const AttendanceSchema = mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    nombre: {
      type: String,
    },
    fecha: {
      type: String,
      required: true,
    },
    horaEntrada: {
      type: String,
    },
    horaSalida: {
      type: String,
    },
  },
  { minimize: false }
);

AttendanceSchema.index({ usuario: 1, fecha: 1 }, { unique: true });

const Attendance = mongoose.model("Attendance", AttendanceSchema);

module.exports = Attendance;

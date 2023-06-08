const mongoose = require("mongoose");
require("dotenv").config();
const { DB_UIL } = process.env;

module.exports = () => {
  const connect = () => {
    try {
      mongoose.connect(
        DB_UIL,
        {
          keepAlive: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        console.log("Conexión con exito a la DB")
      );
    } catch (error) {
      console.log("Error al conectar a la DB");
    }
  };

  connect();
};

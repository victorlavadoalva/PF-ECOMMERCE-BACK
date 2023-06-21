const parseID = require("../../../../utils/parseID");
const Users = require("../../../db/models/User");

const putControllerUsers = async (id, data) => {
  if (!id) throw new Error("Enter an id");
  const galleta = data.name || data.email || data.password;
  if (!galleta) throw new Error("Enter data to modify");

  const idParsed = parseID(id);

  try {
    const user = await Users.findById(idParsed);
    if (!user) throw new Error("User not found");

    if (data.name) user.name = data.name;
    if (data.email) user.email = data.email;
    if (data.password) {
      user.password = data.password;
      await user.save(); // Guarda el usuario para ejecutar el hook de pre-save y encriptar la contraseña
    } else {
      await user.save(); // Guarda el usuario sin encriptar la contraseña
    }

    return user;
  } catch (error) {
    if (error.code === 11000 && error.keyValue && error.keyValue.email) {
      throw new Error("Email already exists");
    }
    throw error;
  }
};

module.exports = putControllerUsers;

const User = require("../../../db/models/User");



const generateRandomPassword = () => {
  // Genera una contraseña aleatoria, puedes utilizar cualquier lógica que desees
  // Aquí hay un ejemplo simple utilizando números y letras:
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let password = "";

  for (let i = 0; i < 8; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
};


const loginControllerUsersGoogle = async ({email,name}) => {
  console.log(email);
  const user = await User.findOne({ email });

  if (!user) {
    // Si el usuario no existe en la base de datos, crea uno nuevo con una contraseña aleatoria
    const randomPassword = generateRandomPassword();
    const userCreate = await User.create({ name,email, password: randomPassword });
    return userCreate
  }

  return user;
};


module.exports = loginControllerUsersGoogle;

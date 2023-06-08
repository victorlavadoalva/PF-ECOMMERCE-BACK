const postControllerUsers = require("../controllers/postControllerUsers");

const postHandlerUsers = async (req, res) => {
  console.log("entro a la ruta");
  const data = req.body;
  console.log(data);
  // const { name, password, email } = req.body;

  // console.log(name, password, email);

  // try {
  //   let createUser = await postControllerUsers(name, password, email);
  //   res.status(200).json(createUser);
  // } catch (error) {
  //   if (error.code === 11000) return res.status(400).send("Email existente");
  //   res.status(400).send(e.message);
  // }
};

module.exports = postHandlerUsers;

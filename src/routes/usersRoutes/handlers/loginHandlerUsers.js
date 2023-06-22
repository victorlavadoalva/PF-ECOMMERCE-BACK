const {loginControllerUsers,USER_NOT_FOUND, PASSOWORD_INCORRECT } = require("../controllers/loginControllerUsers");
const jwt = require("jsonwebtoken");

const loginHandlerUsers = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginControllerUsers(email, password);
if(user === USER_NOT_FOUND) {
  return res.status(404).json({message:"Usuario no encontado"})
}else if(user === PASSOWORD_INCORRECT){
  return res.status(403).json({message:"Contraseña incorrecta"})
} 
    jwt.sign({ user }, "secretKey", { expiresIn: "2h" }, (err, token) => {
      // res.cookie("token", token);
      const combinedObject = { ...user._doc, token };
      console.log(combinedObject);
      res.status(200).json(combinedObject);
      
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = loginHandlerUsers;

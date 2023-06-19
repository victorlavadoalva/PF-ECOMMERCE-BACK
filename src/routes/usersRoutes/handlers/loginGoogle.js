const verifyToken = require("../controllers/googleVerifyToken");
const loginControllerUsersGoogle = require("../controllers/findUserGoogle");

const checkGoogleEmailHandler = async (req, res) => {
  const authorizationHeader = req.headers.authorization;
  console.log("!!!!!!!!!!TOKEN", authorizationHeader);
  if (!authorizationHeader) {
    return res.status(400).json({ message: "Falta Token" });
  }else {
    const token = authorizationHeader.split(" ")[1];
  try {
    const GoogleVerify = await verifyToken(token);
    const searchUserGoogle = await loginControllerUsersGoogle(GoogleVerify);
    res.status(200).json(searchUserGoogle);
  } catch (error) {
    res.status(400).send(error.message);
  }
  }
  
};

module.exports = checkGoogleEmailHandler;

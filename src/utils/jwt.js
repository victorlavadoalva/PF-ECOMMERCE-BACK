const jwt = require("jsonwebtoken");

//Authorization: Bearer <token>
function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) {
    return res.status(400).send("token requerido");
  }
  jwt.verify(token, "secretKey", (err, user) => {
    if (err) {
      return res.status(400).send("Token invalido");
    }
    req.user = user;
    next();
  });
}

module.exports = verifyToken;

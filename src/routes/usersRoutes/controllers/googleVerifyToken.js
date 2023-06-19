const { OAuth2Client } = require("google-auth-library");
require("dotenv").config();
const clientId = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(clientId);


async function verifyToken(token ) {
    try {
      const ticket = await client.verifyIdToken({
      idToken: token,
      audience: clientId,  // Specify the CLIENT_ID of the app that accesses the backend
      // Or, if multiple clients access the backend:
      //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
  });
  const payload = ticket.getPayload();
  const userid = payload['sub'];
  // If request specified a G Suite domain:
  // const domain = payload['hd'];
  return payload
    } catch (error) {
      console.error('Error al verificar el ID Token:', error);
      throw new Error("Error al verificar el ID token");
    }
}

module.exports = verifyToken;

const parseID = require("../../../../utils/parseID");
const Users = require("../../../db/models/User");

const putControllerUsers = async (id, data) => {
  if (!id) throw new Error("Enter an id");
  const galleta =
    data.name || data.email || data.password || data.isAdmin || data.cart;
  if (!galleta) throw new Error("Enter data to modify");

  const idParsed = parseID(id);

  const dataModify = await products.findByIdAndUpdate(idParsed, {
    name: data.name,
    email: data.email,
    password: data.password,
    isAdmin: data.isAdmin,
    cart: data.cart,
  });

  return dataModify;
};

module.exports = putControllerUsers;

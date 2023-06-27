const User = require("../../../db/models/User");

const modifyFavoritesController = async (userId, favorites, type) => {
  const user = await User.findById(userId);
  if (type === "ADD"){
    user.myFavorites = [...user.myFavorites, favorites];
  }
  else{
    user.myFavorites = user.myFavorites.filter(
      (product) => product._id !== favorites._id
    )
  }
  
  await user.save();
  return user;
};

module.exports = modifyFavoritesController;

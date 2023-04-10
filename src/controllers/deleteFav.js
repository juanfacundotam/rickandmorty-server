const { user_favorite } = require("../DB_connection");

const deleteFav = async (req, res) => {
  try {
    const { idUser, idFavorite } = req.query;
    const fav = await user_favorite.findOne({where: {UserId: idUser, FavoriteId: idFavorite}});
    const aux = fav
    await fav.destroy();

    return res.status(200).json(aux);
    // {Delete: "OK"}
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteFav;

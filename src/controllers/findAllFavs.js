const { Favorite, user_favorite } = require("../DB_connection");

const findAllFavs = async () => {
    const allFavs = await Favorite.findAll();
    console.log(allFavs)
    return allFavs;
}

module.exports = findAllFavs

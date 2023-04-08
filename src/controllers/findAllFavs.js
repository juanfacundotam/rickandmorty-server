const { Favorite } = require("../DB_connection");

const findAllFavs = async () => {
    const allFavs = await Favorite.findAll();
    return allFavs;
}

module.exports = findAllFavs

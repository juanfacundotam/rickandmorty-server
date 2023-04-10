const { User, Favorite } = require("../DB_connection");
const Sequelize = require("sequelize");
const { Op } = Sequelize;

const userFavs = async (req, res) => {
  const { id } = req.params;
  try {
    const userAllFavs = await User.findByPk(id, {
      include: {
        model: Favorite,
        attributes: ["id"],
        through: {
          attributes: [],
        },
      },
    });

    const arrayIds = userAllFavs.Favorites.map((element) => {
      return element.dataValues.id;
    });
    const userfavorites = await Favorite.findAll({
      where: {
        id: {
          [Op.in]: arrayIds,
        },
      },
    });

    return res.status(200).json(userfavorites);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = userFavs;

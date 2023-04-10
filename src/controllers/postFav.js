const {Favorite} = require("../DB_connection");

const postFav = async (req, res) => {
    try {
        const {id, name, origin, status, image, species, gender, iduser} = await req.body;
        if(!id || !name || !origin || !status || !image || !species || !gender) return res.status(401).send("Faltan datos"); 
        const [fav, created] = await Favorite.findOrCreate({where: {id: Number(id), name, origin, status, image, species, gender}})

        fav.addUsers(iduser);
        const allFavorites = await Favorite.findAll();
        
        return res.status(200).json(allFavorites);
    } catch (error) {
        res.status(404).json({error: error.message});
    }
}

module.exports = postFav;
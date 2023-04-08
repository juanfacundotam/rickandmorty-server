const { Router } = require("express");
const router = Router();
const {User} = require("../DB_connection");
const getCharById = require("../controllers/getCharById");
const getCharByDetail = require("../controllers/getCharDetail");
const findAllFavs = require("../controllers/findAllFavs");
const postFav = require("../controllers/postFav");
const deleteFav = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");
const loginUser = require("../controllers/loginUser");
const loginAll = require("../controllers/loginAll")


/****************************************************************/

router.get("/onsearch/:id", getCharById); //(req, res) => getCharById(); similar a esto!

router.get("/detail/:id", getCharByDetail);

//******************************************************* */


router.get("/login", loginUser);

router.post("/login", postUser);

router.get("/loginall", loginAll);

/******************************************************************/
// router.use("/rickandmorty/favs")

router.get("/fav", async (req, res) => {
try {
  const allFavs = await findAllFavs();
  res.status(200).json(allFavs);
} catch (error) {
  res.status(404).json({ error: "No hay personajes favoritos" });
}
});

router.post("/fav", postFav)
// (req, res) => {
//   const character = req.body;
//   if (character.name) {
//     favorites.push(character);
//     res.status(201).json(character);
//   } else {
//     res.status(404).json({ error: "no se agrego ningún personaje" });
//   }
// });

router.delete("/fav/:id", deleteFav)
// (req, res) => {
//   const { id } = req.params;
//   const favFilter = favorites.filter((char) => char.id !== Number(id));
//   if (favFilter.length !== favorites.length) {
//     favorites = favFilter;
//     return res.status(204).json({ success: true });
//   }
//   res.status(404).json({ error: "No se eliminó ningún personaje" });
// });


module.exports = router;

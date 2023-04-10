const { User } = require("../DB_connection");

const loginUser = async (req, res) => {
  try {
    const { username, password } = req.query;
    if (!username || !password) return res.status(400).json({message: "Faltan datos"});

    const userLogin = await User.findOne({ where: { username: username} });
    const id = await userLogin.id
    console.log(id)
    if (!userLogin) return res.status(400).send("Usuario no encontrado");
    if (userLogin && userLogin.password !== password) return res.status(403).send("Contraseña incorrecta");
    return res.status(200).json({ access: true, id: userLogin.id});
  } catch (error) {
    res.status(500).send({error: error.message});
  }
};

module.exports = loginUser;

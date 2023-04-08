const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) return res.status(400).send("Faltan datos");
    const foundUser = await User.findOne({ where: { username: username } });
    if (!foundUser) {
      const newUser = await User.create({
        username: username,
        password: password,
      });
      return res.status(200).json(newUser);
    }
    return res.status(200).json({ error: "El usuario ya existe" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = postUser;

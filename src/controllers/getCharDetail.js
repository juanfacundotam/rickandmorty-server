const axios = require("axios");
const { URL } = process.env;

const getCharByDetail = async (req, res) => {
  try {
    const params = req.params;
    const response = await axios.get(`${URL}/character/${params.id}`);
    const { id, image, name, gender, species, origin } = response.data;
    const character = {
      id: id,
      image: image,
      name: name,
      gender: gender,
      species: species,
      origin: origin,
    };

    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getCharByDetail;

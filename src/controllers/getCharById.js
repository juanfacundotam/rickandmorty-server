const axios = require("axios");
const { URL } = process.env;

const getCharById = async (req, res) => {
  try {
    const params = req.params;
    const response = await axios.get(`${URL}/character/${params.id}`);
    const { id, image, name, status, gender, species, origin} = response.data;
    const character = {
      id: id,
      image: image,
      name: name,
      status: status,
      gender: gender,
      species: species,
      origin: origin
    };
    res.status(200).json(character);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = getCharById;

// res.writeHead(200, {"Content-Type": "application/json"});
// res.end(JSON.stringify(characterFilter)); //Si fuese con filter pondriamos characterFilter[0]

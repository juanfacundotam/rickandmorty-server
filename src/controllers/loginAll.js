const { User } = require("../DB_connection");

const loginAll = async (req, res) => {
    try {
        const allUser = await User.findAll();
        return res.status(200).json(allUser);
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

module.exports = loginAll
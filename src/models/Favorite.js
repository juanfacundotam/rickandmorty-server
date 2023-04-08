const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Favorite', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        status: {
            type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
            defaultValue: "Alive"
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        origin : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        timestamps: false
    })
}

const { DataTypes } = require("sequelize");
const { sequelise } = require("../dbconfig");


const Ville = sequelise.define('villes', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    villeName: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
})



exports.Ville = Ville
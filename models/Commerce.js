const { DataTypes } = require("sequelize");
const { sequelise } = require("../dbconfig");


const Commerce = sequelise.define('commerces', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    commerceName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    proprietaireName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adresse: {
        type: DataTypes.STRING,
    },
    telephone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    transfert: {
        type: DataTypes.FLOAT,
    },
    date_transfert: {
        type: DataTypes.DATE,
    },
    type_transfert: {
        type: DataTypes.STRING,
    },
    payed: {
        type: DataTypes.BOOLEAN,
    },
    date_peremption: {
        type: DataTypes.DATE,
    },
    presentation: {
        type: DataTypes.STRING,
    },
  })



  exports.Commerce = Commerce
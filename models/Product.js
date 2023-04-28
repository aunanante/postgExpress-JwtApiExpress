const { DataTypes } = require("sequelize");
const { sequelise } = require("../dbconfig");


const Product = sequelise.define('products', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    sku: {
        type: DataTypes.STRING,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    unitPrice: {
        type: DataTypes.FLOAT,
    },
    imageUrl: {
        type: DataTypes.STRING,
    },
    active: {
        type: DataTypes.BOOLEAN,
    },
    unitsInStock: {
        type: DataTypes.INTEGER,
    },
    dateCreated: {
        type: DataTypes.DATE,
    },
    lastUpdate: {
        type: DataTypes.DATE,
    },
  })



  exports.Product = Product
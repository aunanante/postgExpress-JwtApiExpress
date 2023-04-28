const { DataTypes } = require("sequelize");
const { sequelise } = require("../dbconfig");


const ProductCategory = sequelise.define('productsCategory', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  })



  exports.ProductCategory = ProductCategory
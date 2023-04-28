const { Sequelize } = require("sequelize");



const sequelise = new Sequelize(
    'discover',
    'postgres',
    'jc_Onana_Ntsama_12.03.2023',
    {
        dialect: "postgres",
        host: "localhost"
    }
)


function init() {
    sequelise.sync({
        alter: true
    }).then(res => {
        console.log("Database connection successful")
    }).catch(err => console.log("Errors", err))
}

async function connect() {
    try {
        await sequelise.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}


function close() {
    sequelise.close()
}

exports.sequelise = sequelise
exports.connect = connect
exports.close = close
exports.init = init


const { User } = require('./models/User')
/* const {Team} = require('./models/Team')
const {Project} = require('./models/Project') */

const { Ville } = require('./models/Ville')
const { Commerce } = require('./models/Commerce')
const { ProductCategory } = require('./models/ProductCategory')
const { Product } = require('./models/Product')

/* Team.hasMany(Project,{
    foreignKey: {
        allowNull: true
    }
})
Team.hasMany(User, {
    foreignKey: {
        name: "team_id",
        allowNull: true
    }
}) */

Ville.hasMany(Commerce, {
    foreignKey: {
        name: "ville_id",
        allowNull: false
    }
})

Commerce.hasMany(ProductCategory, {
    foreignKey: {
        name: "commerce_id",
        allowNull: false
    }
})

ProductCategory.hasMany(Product, {
    foreignKey: {
        name: "productCategory_id",
        allowNull: false
    }
})
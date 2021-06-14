require('dotenv').config()
const Sequelize = require('sequelize');


//const sequelize = new Sequelize(process.env.DATABASE_URL);
const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);


module.exports = sequelize;
require('dotenv').config()
const Sequelize = require('sequelize');






const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);





//if you have special characters in your pgAdmin password use this on your branch!!!!

// const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/<dbName>`, {
//     dialect: 'postgres',
//     ssl: process.env.ENVIRONMENT=== 'production'
// })

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',-
//     dialectOptions: {
//         ssl: true
//     }});






module.exports = sequelize;
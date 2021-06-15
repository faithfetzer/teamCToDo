require('dotenv').config()
const Sequelize = require('sequelize');






<<<<<<< HEAD
<<<<<<< HEAD
=======
const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);
>>>>>>> c6c7abf88487e12871278722dff307186ed85e8f
=======

=======
const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);
>>>>>>> 177510bf4678df84e86bc61847376cf9f067d379





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
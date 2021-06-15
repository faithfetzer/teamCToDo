require('dotenv').config()
const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);




<<<<<<< HEAD
=======


const sequelize = new Sequelize(process.env.DATABASE_URL);





//if you have special characters in your pgAdmin password use this on your branch!!!!
>>>>>>> 5b4138f94adccb45a955e63f6ad1e33b5bcc60bd

// const sequelize = new Sequelize(process.env.DATABASE_URL || `postgresql://postgres:${encodeURIComponent(process.env.PASS)}@localhost/<dbName>`, {
//     dialect: 'postgres',
//     ssl: process.env.ENVIRONMENT=== 'production'
// })

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: true
//     }});



<<<<<<< HEAD
=======



>>>>>>> 5b4138f94adccb45a955e63f6ad1e33b5bcc60bd
module.exports = sequelize;
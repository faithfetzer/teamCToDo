require('dotenv').config()
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);

<<<<<<< HEAD
// const sequelize = new Sequelize(process.env.DATABASE_URL);
=======
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: true
//     }});
>>>>>>> 1d71764f9f6a1cb81cc44e6949fab1b1ff1142f5

const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);


module.exports = sequelize;
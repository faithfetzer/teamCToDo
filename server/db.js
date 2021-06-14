require('dotenv').config()
const Sequelize = require('sequelize');
<<<<<<< HEAD
=======


const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);
>>>>>>> cd1a4d3cd498cbbfd8723bb2d70bdffb61b5db1d

const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);



// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect: 'postgres',
//     ssl: process.env.ENVIRONMENT === 'production'
// })

//if you have special characters in your pgAdmin password use this on your branch!!!!

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
    //const sequelize = new Sequelize(process.env.DATABASE_URL_LOCAL);

=======
>>>>>>> cd1a4d3cd498cbbfd8723bb2d70bdffb61b5db1d
module.exports = sequelize;
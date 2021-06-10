const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:YOURPASSWORD@localhost:5432/SERVERNAME');

module.exports = sequelize;
// build user model
// first name, last name, email, password- all required
// in requirements of project said something about email formatting so need to make sure we hvae that correct
const {DataTypes} = require('sequelize')
const db = require('../db')

const User = db.define('user', {
    firstName: {
        type: DataTypes.STRING
    },
    lastName: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING(100),
        // validate:{ isEmail: true},
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(),
        // validate: {len: [5, 100]},
        allowNull: false
    }
})


module.exports = User;
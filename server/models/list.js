// build list model
// optional - description, date due, duration, complete/done, important
// required- item name (owner id needed)

const { DataTypes} = require('sequelize');
const db = require('../db')

// only required if date is used (not sure how to code this but will figure it out!) -time due
const List = db.define("list", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
  },
  timedue: {
    type: DataTypes.TIME,
  },
  description: {
    type: DataTypes.STRING,
  },
  duration: {
    type: DataTypes.INTEGER,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  important: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  owner_id: {
    type: DataTypes.INTEGER,
  },
});

module.exports = List;
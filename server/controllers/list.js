// build list endpoints
// get (by user logged in)
// post (new item)
// put (update)
// delete
// endpoints: 
// SITE/list/
// SITE/list/create
// SITE/list/update
// SITE/list/delete
const { DataTypes } = require('sequelize');
const db = require('../db')

const Express = require('express');
const router = Express.Router();

router.get('/practice', (req, res) => {
    res.send('Hey!')

})

module.exports = router
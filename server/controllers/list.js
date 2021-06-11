// build list endpoints
// get (by user logged in)
// post (new item)
// put (update)
// delete
const { DataTypes } = require('sequelize');
const db = require('../db')

const List = db.define('list', {

})






const Express = require('express');
const router = Express.Router();

router.get('/practice', (req, res) => {
    res.send('Hey!')

})







module.exports = router
// endpoints: 
// SITE/list/
// SITE/list/create
// SITE/list/update
// SITE/list/delete
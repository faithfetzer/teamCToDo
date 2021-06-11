// build list endpoints
// get (by user logged in)
// post (new item)
// put (update)
// delete
// const middleware = require('../middleware');
// endpoints: 
// SITE/list/
// SITE/list/create
// SITE/list/update
// SITE/list/delete
const { DataTypes } = require('sequelize');
const db = require('../db')
const Express = require('express');
const { ListModel } = require('../models');
const router = Express.Router();

/* 
===============================
    List creating
===============================
*/

router.post('/create', async (req, res) => {
    const {name, date, timedue, description, duration} = req.body;
    //const {id} = req.user;
    const listEntry = {
        name :name,
        date : date,
        timedue: timedue,
        description: description,
        duration: duration,
        completed: false,
        important: false
       // owner_id
    }
    try {
        const newList = await ListModel.create(listEntry);
        res.status(200).json(newList);
    }
    catch(err) {
        res.status(500).json({error: err})
    }
    // ListModel.create(listEntry)
})

router.get('/practice', (req, res) => {
    res.send('Hey!')

})

module.exports = router
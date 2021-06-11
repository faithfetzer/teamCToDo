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

/* 
==================================================
Get all Lists
==================================================
*/

router.get('/', async (req, res) => {
    try {
        const entries = await ListModel.findAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({error: err})
    }
})

/* 
===============================================
Get List by User (make later not now)
===============================================
*/

// router.get('/mine', validateJWT, async (req, res) => {
//     let { id } = req.user;
//     try {
//         const userList = await ListModel.findAll({
//             where: {
//                 owner: id
//             }
//         });
//         res.status(200).json(userList);
//     } catch (err) {
//         res.status(500).json({error: err})
//     }
// })









router.get('/practice', (req, res) => {
    res.send('Hey!')

})

module.exports = router
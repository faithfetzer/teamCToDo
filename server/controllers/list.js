// build list endpoints
// get (by user logged in)
// post (new item)
// put (update)
// delete
// const middleware = require('../middleware');

// endpoints: 
// SITE/list/ //!Done
// SITE/list/create //!Done
// SITE/list/update//!Done
// SITE/list/delete//!Done
const { DataTypes } = require('sequelize');
const db = require('../db')
const Express = require('express');
const { ListModel } = require('../models');
const validateJWT = require('../middleware/validateSession');
const router = Express.Router();

/* 
===============================
    List creating
===============================
*/

router.post('/create',  validateJWT, async (req, res) => {
    const {name, date, timedue, description, duration} = req.body;
    const {id} = req.user;
    const listEntry = {
        name :name,
        date : date,
        timedue: timedue,
        description: description,
        duration: duration,
        completed: false,
        important: false,
        owner_id: id
    }
    // console.log(req.user.id, req.body, listEntry)
    try {
        const newList = await ListModel.create(listEntry);
        res.status(200).json(newList);
    }
    catch(err) {
        console.log(err)
        res.status(500).json({error: err})
    }
    // ListModel.create(listEntry)
})

/* 
==================================================
Get all Lists
==================================================
*/

// router.get('/', async (req, res) => {
//     try {
//         const entries = await ListModel.findAll();
//         res.status(200).json(entries);
//     } catch (err) {
//         res.status(500).json({error: err})
//     }
// })

// commented this out and changed endpint for the get lsit by user, because we don't want anyone to be able to have an endpoint where they can see lists that arent theirs- FF
/* 
===============================================
Get List by User (make later not now)
===============================================
*/

router.get('/', validateJWT, async (req, res) => {
    let { id } = req.user;
    try {
        const userList = await ListModel.findAll({
            where: {
            owner_id: id,
        }
        });
        res.status(200).json(userList);
    } catch (err) {
        res.status(500).json({error: err})
    }
})

/* 
==============================
    Update the List (something )
==============================
*/
router.put('/update/:entryId', validateJWT, async (req, res) => {
    const {name, date, timedue, description, duration, completed, important} = req.body;
    const listId = req.params.entryId;
    const userId = req.user.id;

    const query = {
        where: {
            id: listId,
            owner_id: userId
        }
    }

    const updateList = {
        name: name,
        date: date,
        timedue: timedue,
        description: description,
        duration: duration,
        completed: completed,
        important: important
    };
    try {
        const update = await ListModel.update(updateList, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({error: err})
    }

})

/* 
=========================================
    Delete a List
=========================================
*/
router.delete('/delete/:id', validateJWT, async (req, res) => {
    const ownerId = req.user.id;
    const listId = req.params.id;

    try {
        const query = {
            where: {
                id: listId,
                owner_id: ownerId,
            }
        };

        await ListModel.destroy(query);
        res.status(200).json({ msg: "Item has been removed from list"});
    } catch (err) {
        res.status(500).json({error: err})
    }
})

/* 
==============================
    SORT BY COMPLETED
    Sort by Important
*/

router.get('/important', validateJWT, async (req, res) => {
    let { id } = req.user;
    try {
        const userImportant = await ListModel.findAll({
            where: {
            owner_id: id,
            important: true,
        }
        });
        res.status(200).json({
            msg: `These are the important items`,
            userImportant,
        });
    } catch (err) {
        res.status(500).json({error: err})
    }
})

/* 
=========================================
    Sort by Completed
=========================================
*/

router.get('/completed', validateJWT, async (req, res) => {
    let { id } = req.user;
    try {
        const userCompleted = await ListModel.findAll({
            where: {
            owner_id: id,
            completed: true
        }
        });
        res.status(200).json({
            msg: `here are completed items`,
            userCompleted
        })
    } catch (err) {
        res.status(500).json({error: err})
    }
})






router.get('/practice', (req, res) => {
    res.send('Hey!')

})

module.exports = router
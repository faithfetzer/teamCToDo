
// build user components
// signup
// login
// endpoints: 
// SITE/user/login
// SITE/user/register

const router = require("express").Router();
const {UserModel} = require("../models");


router.post('/register', async (req, res) => {
    let {firstName, lastName, email, password} = req.body
    try{
        const user = UserModel.create({
            firstName:firstName,
            lastName: lastName,
            email: email,
            password: password
        })
        res.send('user created')
    } catch(err){
        res.send(err)
    }

})

module.exports = router



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

        UserModel.create({
            firstName: "test",
            lastName: "test1",
            email: "user@email.com",
            password: "password1234"
        })


})

module.exports = router


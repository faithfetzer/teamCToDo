const router = require("express").Router();
const {UserModel} = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { UniqueConstraintError, ValidationError } = require('sequelize');
const validateJWT = require('../middleware/validateSession');


// build user components
// signup
// login
// endpoints: 
// SITE/user/login
// SITE/user/register

// !Register endpoint THIS IS DONE AND WORKS TESTING HAS BEEN DONE

router.post('/register', async (req, res) => {
    let {firstName, lastName, email, password} = req.body
    console.log(req.body)
    try{
        const user = await UserModel.create({
            firstName:firstName,
            lastName: lastName,
            email: email,
            password: bcrypt.hashSync(password, 13)
        })
        const token = jwt.sign(
            {id: user.id,},
            process.env.JWT_SECRET,
            {expiresIn: 60 * 60 * 12}
        )

        res.status(201).json({
            msg: 'User Registered!',
            user: user,
            token
        })

    } catch (err) {
        if(err instanceof UniqueConstraintError) {
            res.status(409).json({
                msg: `Email already in use`
            });
        } else if(err instanceof ValidationError){
            res.status(409).json({
                msg: `email or password incorrect format`,
                err
            })
        } else {
            res.status(500).json({
                error: `Failed to register user: ${err}`
            })
        }
    }
})



// !Login endpoint

router.post('/login', async(req,res) => {
    let { email, password } = req.body;
    try {
        let loginUser = await UserModel.findOne({
            where: {email: email,}
        })
        if(loginUser) {
            let passwordComparison = await bcrypt.compare(password, loginUser.password);
            if(passwordComparison) {
                let token = jwt.sign(
                    {id: loginUser.id},
                    process.env.JWT_SECRET,
                     {expiresIn: 60 * 60 * 12}
                );
                res.status(200).json({
                    user: loginUser,
                    msg: `User successfully logged in!`,
                    token
                });
            } else {
                res.status(401).json({
                    msg: `Incorrect email or password`
                })
            }
        }else {
            res.status(401).json({
                msg: `Incorrect email or password`
            })
        }
    } catch (err) {
        res.status(500).json({
            msg: `Error logging in!`
        })
    }
});

// NEEDS WORK- not seeing userID variable and defaulting to incorrect email due to it seeing userToDelete as falsey- FF
// router.delete('/delete', validateJWT, async(req,res) => {
//     const {email, password} = req.body;
//     const userID = req.user.id;
//     console.log('id', req.user.id)
//     try {
//         const {userToDelete} = await UserModel.findOne({
//             where: {id: userID, email : email}
//         })
//         console.log(userToDelete);
//          if(userToDelete) {
//             let passwordComparison = await bcrypt.compare(password, userToDelete.password);
//             if(passwordComparison) {
//                 await UserModel.destroy(userToDelete);
//                 res.status(200).json({ msg: "User Account has been deleted"});
//             } else {
//                 res.status(401).json({
//                     msg: `Incorrect password`
//                 })
//              }
//          } else {
//             res.status(401).json({
//                 msg: `Incorrect email`
//             })
//         }
//     } catch (err) {
//         res.status(500).json({
//             msg: `Error deleting user ${err}`
//         })
//     }
// });


// ! Hopes Trying out the delete  vvvvv


// NEEDS WORK- not seeing userID variable and defaulting to incorrect email due to it seeing userToDelete as falsey- FF


// router.delete('/:id', validateJWT, async(req,res) => {
//     const {email, password} = req.body;
//     const userID = req.user.id;
//     console.log('id', req.user.id)
//     try {
//         const {userToDelete} = await UserModel.findOne({
//             where: {id: userID, email : email}
//         })
//         console.log(userToDelete);
//          if(userToDelete) {
//             let passwordComparison = await bcrypt.compare(password, userToDelete.password);
//             if(passwordComparison) {
//                 await UserModel.destroy(userToDelete);
//                 res.status(200).json({ msg: "User Account has been deleted"});
//             } else {
//                 res.status(401).json({
//                     msg: `Incorrect password`
//                 })
//              }
//          } else {
//             res.status(401).json({
//                 msg: `Incorrect email`
//             })
//         }
//     } catch (err) {
//         res.status(500).json({
//             msg: `Error deleting user ${err}`
//         })
//     }
// });


module.exports = router
// validate session using jwt
require("dotenv").config;
const jwt = require("jsonwebtoken");
const { UserModel } = require('../models/user');

const validateJWT = async (req, res, next) => {
    // console.log(req.headers, req.method, req.body)
    if (req.method == "OPTIONS") {
        next();
    } else if (req.headers.authorization) {
        const { authorization } = req.headers;
        console.log("authorization -->", authorization);

        const payload = authorization ? jwt.verify( authorization, process.env.JWT_SECRET): undefined;
            console.log("payload -->", payload);

        if (payload) {
            let foundUser = await UserModel.findOne({where: { id: payload.id }});
            console.log("foundUser -->", foundUser);

            if (foundUser) {
                console.log("request -->", req);
                req.user = foundUser;
                
                next();
            } else {
                res.status(400).send({ message: "Not Authorized" });
            }
        } else {
            res.status(401).send({ message: "Invalid token" });
        }
    } else {
        res.status(403).send({ message: "Forbidden" });
    }
};

module.exports = validateJWT;
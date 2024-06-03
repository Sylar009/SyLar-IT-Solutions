const User = require("../models/user-model");

// *----------------------------
// Home Logic
// *----------------------------

const home = async ( req, res) => {
    try {
        res
        .status(200)
        .send("Welcome to world best MERN series by Sanyam Lawania using controller Router");
    } catch (error) {
        console.log(error);
    }
};

// *----------------------------
// Registration Logic
// *----------------------------

const register = async ( req, res) => {
    try {
        // console.log(req.body);
        
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({email: email});
        if (userExist) {
            return res.status(400).send({msg:"User already exists."});
        }

        const userCreated = await User.create({username, email, phone, password});

        res.status(200).send({msg: userCreated});

    } catch (error) {
        res.status(400).send({msg:"Page Not Found"})
    }
};

module.exports = {home, register};
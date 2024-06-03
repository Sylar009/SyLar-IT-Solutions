const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username : {
        type: String,
        require: ture
    },
    email : {
        type: String,
        require: ture
    },
    phone : {
        type: String,
        require: ture
    },
    password : {
        type: String,
        require: ture
    },
    isAdmin: {
        type:Boolean,
        default: false
    }
});

// define the model and the collection name 
const User = new mongoose.model("User", userSchema);

module.exports = User;
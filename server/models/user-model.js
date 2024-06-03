const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  });

// secure the password with the bcrypt

userSchema.pre("save", async function (next) {
    console.log("pre method", this);

    const user = this;
    if (!user.isModified("password")) {
        next();
    }

    try {

        // hash the password 
        console.log("Encrypting the password")
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password, saltRound);
        user.password = hash_password;

    } catch (error) {
        next(error);
    }
}); 

// define the model and the collection name 
const User = new mongoose.model("User", userSchema);

module.exports = User;
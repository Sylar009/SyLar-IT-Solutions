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
        console.log(req.body)
        res
        .status(200)
        .send({message: req.body});
    } catch (error) {
        res
        .status(400)
        .send({msg:"Page Not Found"})
    }
};

module.exports = {home, register};
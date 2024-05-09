const express = require("express");
const app = express();
const router = require("./router/auth-router");

app.use("/api/auth", router);

// app.get("/", (req, res) => {
//     res.status(200).send("Welcome to world best MERN series by Sanyam Lawania");
// } );

// app.get("/register", (req, res) => {
//     res.status(200).send("Welcome to Registration Page");
// } );

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`server is running on the port: ${PORT}`);
});
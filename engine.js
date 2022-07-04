//enviroment variable
require("dotenv").config();

//importing dependences
const express = require("express");
const fs = require("fs");

//server and port config
const app = express(), PORT = process.env.PORT || 5000;

app.use(express.static("public")); // static files
app.use(express.json()); // express json
app.use(express.urlencoded({extended : true})); // url encoding

//view engine
app.set("view engine", 'ejs');

//index route
app.get("/", (req, res) => {
   res.render("index", {data:"billionaire"})
});

//setting server general middleware
app.use((req, res, next) => {
    console.log("Server middleware running");
    req.server = "HAHAH!!!!!!!";
    next();
});

//importing the demo route from route1.js
const demoRouter = require("./route/route1");
app.use("/demo", demoRouter);

//user demo route
const userRouter = require("./route/user");
app.use("/user", userRouter);

//creating the server
app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
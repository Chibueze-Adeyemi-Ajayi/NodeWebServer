//a simple route
//this is a simple life application of the router

const express = require("express");
const router = express.Router();

//including the static files into the router
router.use(express.static("public"));

router.route("/").get((req, res) => { //loading the index page
    res.render("index", {data:"billionaire"});
}).post((req, res, next) => {//post method middle ware
    const data = req.body.uid;
    req.data = data;
    next();
}, (req, res) => {//handling the post request for the index path
    console.log(`Newly added user is ${req.data}`);
    //redirecting
    res.redirect("/user/" + req.data);
}); //you can subsequently add the put and delete method 

//listing user by username
router.get("/:id", (req, res) => {//handling user
    res.send(`Hi, ${req.params.id}`);
});

router.get("/new", (req, res) => {
    res.render("create_user");
});

router.get("/all", (req, res) => {
    res.render("list_user");
});

module.exports = router;
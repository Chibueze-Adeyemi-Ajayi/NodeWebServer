//a simple route
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("This is path 0")
});

router.get("/path1", (req, res) => {
    res.send("This is path 1")
});

router.get("/path2", (req, res) => {
    res.send("This is path 2")
});

router.get("/path3", (req, res) => {
    res.send("This is path 3")
});

//passing data from the URL to our route
//this can be used in the case of passing ID

router.route("/user/:id").get((req, res) => {
   const id = req.params.id;
   //this can be used in fetching user
   res.send(`Just requested for path which is ${id} using GET<br>And the middleware returns '${req.response}'<br>Server says: '${req.server}'`);
}).put((req, res) => {
    const id = req.params.id;
    //this can be used in adding user
    res.send(`Just requested for path which is ${id} using PUT`)
}).delete((req, res) => {
    const id = req.params.id;
    //this can be used TO delete user
    res.send(`Just requested for path which is ${id} using DELETE`)
});

//A simple middleware
router.param("id", (req, res, next, id) => {
    //this tend ro run before displaying data
    console.log(`You just ran a middleware for id '${id}'`);
    //putting value into the main GET router
    req.response = "Adeyemi";
    next();
})

module.exports = router
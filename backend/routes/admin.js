var express = require('express');
var router = express.Router();
var passport = require('passport');
var Batch = require('../models/batch');

// For registering user
router.post("/addTeacher", function(req, res) {
    var newUser = new User(
        {
            name : req.body.username,
            email : req.body.email,
            skill: req.body.skill,
            category: req.body.category
        });
    User.register(newUser, req.body.password, function(err, user) {
        // we pass password as second argument because we dont need to store the password in the database.
        if(err) {
            res.status(404).send(err)
        } else {
            passport.authenticate("local")(req, res, function(){
                res.status(200).send("Registration Successful");
            });
        }
    });
});

// Login Check
router.post("/login", passport.authenticate("local", {
    successRedirect : "/campgrounds",
    failureRedirect : "/login"
}),function(req, res) {

}); 

router.post("/addRoute", function(req, res) {
    var tempBatch = new Batch(
        {
            time : req.body.time
        });
    console.log(req.body.time);
    tempBatch.save()
    .then(reg => {
        res.status(200).send("Slot Created Successfully");
    })
    .catch(err =>{
        res.status(400).send(err)
    })
});

module.exports = router;
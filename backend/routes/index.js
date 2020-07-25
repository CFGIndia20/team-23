var express = require('express');
var router = express.Router();
var passport = require('passport');

// For registering user
router.post("/register", function(req, res) {
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

module.exports = router;
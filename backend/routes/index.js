const router = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const nodemailer = require("nodemailer");

//student-registration
router.post('/register', (req,res,next) =>{
    let tempUser =  new User(req.body);
    console.log(req.body);
    tempUser.save()
    .then(reg => {
        res.status(200).send("Registration Success");
    })
    .catch(err =>{
        console.log(err);
        res.status(400).send(err)
    })

  // create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'team23cfg2020@gmail.com', // generated ethereal user
      pass: 'qwerty@123', // generated ethereal password
    },
  });

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"Team 23" <team23cfg2020@gmail.com>', // sender address
    to: "aav2406@gmail.com", // list of receivers
    subject: "Registration Successful", // Subject line
    html: "<b>Welcome</b>", // html body
    text: "Please click on the link given below to appear for the entrance examination and submit the following documents as well.", // plain text body
  });

});

//user-login
router.post('/login',(req,res)=>{
    User.findOne({email: req.body.username})
    .then(user => {
        // console.log("User info", user)
        if(!user){
            res.status(850).send("User Not Found")
        }
        else{
            // console.log("User from login",user)
            bcrypt.compare(req.body.password, user.password)
            .then(
                passwordMatch => passwordMatch ? res.status(200).json(user) : res.status(500).send("No record found")
                )
            .catch(err =>res.status(400).send(err))
        }
        ;
    })
    
})

module.exports = router;
var express = require('express');
var router = express.Router();
var Batch = require('../models/batch');
const nodemailer = require("nodemailer");

//send available slot
router.get("/viewslots", (req, res)  => {
    var teacherId = req.body.teacherId;
    Batch.find({ teacher : teacherId })
    .then(batches => {
        res.status(400).send(batches)
    })
    .catch(err => res.status(400).send(err))
});

router.get("/request",(req, res) => {
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
        subject: "Request Registered Successfully", // Subject line
        text: "Thank you for raising the request. We will get back to you shortly.", // plain text body
    });
});

module.exports = router;

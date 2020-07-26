var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Batch = require('../models/batch');
var Job = require('../models/job');
var nodemailer = require('nodemailer');

//send available slot
router.get("/displayAvailBatch", function(req, res) {
    Batch.find({ isFull : false })
    .then(slot => {
        // console.log("Slot info", slot)
        // if(!slot){
        //     res.status(404).send("Slot Not Found")
        // }
        // else{
        //     console.log("Slot",slot)
            
        //     .then(
                res.status(200).json(slot)
        //     )
        //     .catch(err =>res.status(400).send(err))
        // }
       
    })
    .catch(err => {
        res.status(400).send(err)
    })
});

//alots student to batch.takes batch id
router.post("/allotSlot/:id", function(req, res){
    Batch.updateOne({
        _id: req.param.id,
        isFull: false
    },{
        $inc : {noOfStudent : 1}

    },(err,res1)=>{
        if(res1){
            Batch.update({ $eq : {noOfStudent : 15} },
                {$set : { isFull: true}},
                (err,res2)=>{
                    User.updateOne({ email: req.body.email}
                        ,{ $set: {status : "Approved" },
                            $push: {batch : res2._id}
                        },(err,res1)=>{
                            res.status(200).json(res1)
                        })
                })
        
        }

    })    
    .catch(err =>res.status(400).send(err))

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
        subject: "Slot Alloted", // Subject line
        text: "Dear Student, your time slot will be .", // plain text body
    });

    // console.log(req.params.id)
    // Batch.findOneAndUpdate({_id: req.params.id})
    // .then(batch => {
    //     console.log(batch)
    //     var flag = false;
    //     if(batch.noOfStudents + 1 == 15) {
    //         flag = true;   
    //     }
    //     var bns = batch.noOfStudents + 1;
    //     batch.update({noOfStudents : bns}, {isFull : flag})
    //     console.log(req.body.email)
    //     User.find({email: req.body.email})
    //     .then(user => {
    //         console.log(user)
    //         // user.status = "Approved"
    //         // user.batch.push(req.params.id)
    //         user.update({status : "Approved"}, { $push: {batch : req.params.id}})
    //         res.status(200).json(batch)
    //     })
    //     .catch(err => {
    //         res.status(404).send(err);
    //     })
    // })
    // .catch(err => {
    //     res.status(404).send(err);
    // })
});

//display available job..
router.post("/displayAvailJob/:email", function(req, res) {
    User.find({ email: req.params.email})
    .then(user => {
        console.log("user",user);
        Batch.find({
            _id : user.batch.batchId[0]
        })
        .then(batch =>{
            if( batch.endDate > Date.now() )
            {
                Job.find({isOpen : true})
                .then(jobs=>{
                    console.log("job ",jobs);
                    res.status(200).json(jobs)
                })
                .catch(err => res.status(400).send(err))
            }
            else{
                res.status(404).send("No Jobs Available before end of course.")
            }
        })
        .catch(err => {
            res.status(404).send(err)
        })
    })
    .catch(err => {
        res.status(400).send(err)
    })
});

router.post("/applyJob/:email/:jobid", function(req, res) {
    User.findOne({ email: req.params.email})
    .then(user => {
        console.log("user",user);
        Job.updateOne({
            _id : req.params.jobid
        },{
            $push : {students : user._id}
        },(err, result)=>{
            if(result){
               res.send(200).send("Applied Successfully") 
            }
            else{
                res.send(400).send("Couldn't apply successefully")
            }
        }
        )
       
    })

});

module.exports = router;

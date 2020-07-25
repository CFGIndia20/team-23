var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Batch = require('../models/batch');
var Job = require('../models/job');

//send available slot
router.get("/displayAvailBatch", function(req, res) {
    Batch.find({ isFull : false })
    .then(slot => {
        console.log("Slot info", slot)
        if(!slot){
            res.status(404).send("Slot Not Found")
        }
        else{
            console.log("Slot",slot)
            
            .then(
                res.status(200).json(slot)
            )
            .catch(err =>res.status(400).send(err))
        }
       
    });

});

//alots student to batch.takes batch id
router.post("/allotSlot/:id", function(req, res){
    Batch.updateOne({
        _id: req.param.id,
        isFull: false
    },{
        $inc : {noOfStudent : 1}
    },(err,res)=>{
        if(res){

            User.updateOne({ email: req.body.email}
                ,{ $set: {status : "Approved" },
                    $push: {batch : res._id}
                })
        }

    })    
    
    .then(
        res.status(200).send("Slot Booked")
    )
    .catch(err =>res.status(400).send(err))
});

//display available job..
router.post("/displayAvailJob/:email", function(req, res) {
    User.findOne({ email: req.params.email})
    .then(user => {
        console.log("user",user);
        Batch.findOne({
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

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Batch = require('../models/batch');
var Job = require('../models/job');

//send available slot
router.post("/displayAvailBatch", function(req, res) {
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

//alots student to batch
router.post("/allotSlot", function(req, res){
    Batch.updateOne({
        _id: req.body.id,
        isFull: false
    },{
       
        $inc : {noOfStudent : 1}
    })
    .then(
        res.status(200).send("Slot Booked")
    )
    .catch(err =>res.status(400).send(err))
});

//display available job..//false if no jobs...//true if jobs
router.post("/displayAvailJob", function(req, res) {
    User.findOne({ email: req.body.email})
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

module.exports = router;

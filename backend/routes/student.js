var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/user');
var Batch = require('../models/batch');

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

module.exports = router;
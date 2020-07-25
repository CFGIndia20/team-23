var express = require('express');
var router = express.Router();
var Batch = require('../models/batch');

router.post("/addRoute", function(req, res) {
    var tempBatch = new Batch(
        {
            time : req.body.time,
            startDate : req.body.startDate,
            endDate: new Date(req.body.startDate + 30*24*60*60000)

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

router.get("/viewslots", (req, res) => {
    Batch.find()
    .then(batches => {
        res.status(400).json(batches)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
});

router.post("/deleteslot", (req, res) => {
    Batch.findByIdAndDelete(req.body.batchID)
    .then(batch => {
        res.status(200).send("Slot Deleted")
    })
    .catch(err => {
        res.status(400).send(err)
    })
})
module.exports = router;
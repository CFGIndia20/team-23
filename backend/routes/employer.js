var express = require('express');
var router = express.Router();
var Job = require('../models/job');
const job = require('../models/job');
const mongoose = require('mongoose');
const ObjectId = require('mongodb').ObjectID;

router.post('/addjob', (req,res,next) =>{
    let tempJob =  new Job(req.body);
    console.log(req.body);
    tempJob.save()
    .then(reg => {
        res.status(200).send("New Job Opportunity Added Successfully");
    })
    .catch(err =>{
        console.log(err);
        res.status(400).send(err)
    })
});

router.get("/getJobs", (req, res) => {
    Job.find()
    .then(jobs => {
        res.status(200).json(jobs)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
});

// router.patch('/editjob/:id', function (req, res) {
//     var updateObject = req.body; 
//     var id = req.params.id;
//     Job.update({_id  : ObjectId(id)}, {$set: updateObject});
// });
  
module.exports = router;
var express = require('express');
var router = express.Router();
var Job = require('../models/job');

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
        res.status(400).json(jobs)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
});

module.exports = router;
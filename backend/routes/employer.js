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

router.post('/editjob', (req, res) => {
    const { skillReq, seatAvailable } = req.body;
    const jobId = req.params.id;
  
    let job;
    try {
      job = Job.findById(jobId);
    } catch (err) {
        res.status(400).send(err)
    }
  
    job.skillReq = skillReq;
    job.seatAvailable = seatAvailable;
    res.status(200).send("Job Updated Successfully");
  });
  
module.exports = router;
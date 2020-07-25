var express = require('express');
var router = express.Router();
var Batch = require('../models/batch');
var Job = require('../models/job');
const User = require('../models/user');

router.post("/addSlot", function(req, res) {
    var tempBatch = new Batch(
        {
            time : req.body.time
        });
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

router.get("/getJobs", (req, res) => {
    Job.find()
    .then(jobs => {
        res.status(400).json(jobs)
    })
    .catch(err =>{
        res.status(400).send(err)
    })    
})

router.post("/allotTeachers", (req, res) => {
    Batch.find({noOfStudent : 15})
    .then(batches => {
        if(!batches) {
            res.send(400).send("No Batches Available for allotment")
        } else {
            batches.forEach((batch) => {
                flag = false;
                User.find({category : 'Teacher'})
                .then(users => {
                    users.forEach((user) => {
                        user.batch.forEach((user_batch) => {
                            Batch.findById(user_batch.batchId)
                            .then(teacher_batch => {
                                if(teacher_batch.time === batch.time) {
                                    continue;
                                } else {
                                    if(user.noOfSlotsAlloted + 1 > 4) {
                                        continue;
                                    } else {
                                        batch.teacher = user._id;
                                        user.noOfSlotsAlloted = user.noOfSlotsAlloted + 1;
                                        batch.save()
                                        user.save()
                                        flag = true;
                                        break;
                                    }
                                }
                            })
                            .catch(err => {
                                res.status(404).send(err)
                            }) 
                        })
                        if(flag == true) {
                            break;
                        }
                    })
                })
                .catch(err => {
                    res.status(404).send(err);
                })
            })
        }
    })
    .catch(err => {
        res.status(404).send(err)
    })
});

module.exports = router;
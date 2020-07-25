var express = require('express');
var router = express.Router();
var Batch = require('../models/batch');
var Job = require('../models/job');
const User = require('../models/user');
var ObjectId = require('mongodb').ObjectId;

router.post("/addSlot", function(req, res) {
    console.log(req.body.time)
    var tempBatch = new Batch(
        {
            time : req.body.time,
            link : req.body.link,
            startDate : req.body.startDate,
            endDate: new Date(req.body.startDate + 30*24*60*60000)

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
        res.status(200).json(batches)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
});

router.post("/deleteslot", (req, res) => {
    var batch_id = req.body.batchID
    var o_bid = new ObjectId(batch_id)
    Batch.findByIdAndDelete({_id: o_bid})
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
                        if(flag == true) {
                            return;
                        }
                        user.batch.forEach((user_batch) => {
                            if(flag == true) {
                                return;
                            }
                            Batch.findById(user_batch.batchId)
                            .then(teacher_batch => {
                                if(teacher_batch.time === batch.time) {
                                    return;
                                } else {
                                    if(user.noOfSlotsAlloted + 1 > 4) {
                                        return;
                                    } else {
                                        batch.teacher = user._id;
                                        user.noOfSlotsAlloted = user.noOfSlotsAlloted + 1;
                                        batch.save()
                                        user.save()
                                        flag = true;
                                        return;
                                    }
                                }
                            })
                            .catch(err => {
                                res.status(404).send(err)
                            }) 
                        })
                        if(flag == true) {
                            return;
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
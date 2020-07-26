var express = require('express');
var router = express.Router();
var Batch = require('../models/batch');
var Job = require('../models/job');
const User = require('../models/user');

//add-new-slot
router.post("/addSlot", function(req, res) {
    console.log(req.body.time)
    startD = Date.now()
    var tempBatch = new Batch(
        {
            time : req.body.time,
            link : req.body.link,
            startDate : startD,
            endDate: new Date(startD + 4*30*24*60*60000),
            noOfStudent: Number(15)
        });
    tempBatch.save()
    .then(reg => {
        res.status(200).send("Slot Created Successfully");
    })
    .catch(err =>{
        res.status(400).send(err)
    })
});

//view-slots
router.get("/viewslots", (req, res) => {
    Batch.find()
    .then(batches => {
        res.status(200).json(batches)
    })
    .catch(err =>{
        res.status(400).send(err)
    })
});

//delete-existing-slot
router.post("/deleteslot", (req, res) => {
    // console.log(req)
    var batch_id = req.body.batchID
    // console.log(req.body)
    // console.log("Batch ID : " + batch_id);
    // var o_bid = new ObjectId(batch_id)
    // console.log(o_bid)
    Batch.findByIdAndDelete({_id: batch_id})
    .then(batch => {
        console.log(batch);
        res.status(200).send("Slot Deleted")
    })
    .catch(err => {
        res.status(400).send(err)
    })
})

//get-list-of-jobs
router.get("/getJobs", (req, res) => {
    Job.find()
    .then(jobs => {
        res.status(400).json(jobs)
    })
    .catch(err =>{
        res.status(400).send(err)
    })    
})

//list-of-alloted-teachers
router.post("/allotTeachers", (req, res) => {
    Batch.find({noOfStudent : 15})
    .then(batches => {
        console.log("Batches: " + batches)
        if(!batches) {
            res.send(400).send("No Batches Available for allotment")
        } else {
            batches.forEach((batch) => {
                console.log("Batch : " + batch)
                flag = false;
                User.find({category : 'Teacher'})
                .then(users => {
                    console.log("Users : ", users)
                    users.forEach((user) => {
                        if(flag == true) {
                            return;
                        }
                        user.batch.forEach((user_batch) => {
                            console.log(user_batch)
                            if(flag == true) {
                                return;
                            }
                            Batch.findById(user_batch.batchId)
                            .then(teacher_batch => {
                                console.log("Teacher_Batch : " + teacher_batch)
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
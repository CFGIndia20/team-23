var express = require('express');
var router = express.Router();
var Batch = require('../models/batch');

//send available slot
router.get("/viewslots", (req, res)  => {
    var teacherId = req.body.teacherId;
    Batch.find({ teacher : teacherId })
    .then(batches => {
        res.status(400).send(batches)
    })
    .catch(err => res.status(400).send(err))
});

module.exports = router;

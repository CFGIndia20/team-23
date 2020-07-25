// ADMIN
router.get("/viewslots", (req, res) => {
    Batch.find()
    .then(batches => {
        res.status(200).json(batches);
    })
    .catch(err =>{
        res.status(400).send(err)
    })
});

// router.post("/deleteslot", (req, res) => {
//     let batchId = req.body.batchID;
// });
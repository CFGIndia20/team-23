const mongoose = require("mongoose")

const batch = mongoose.Schema({
    time: {type: String, default: ''},
    scoreRange: {type: String, default: ''},
    noOfStudent: {type: Number, default: 0},
    startDate: {type: Date, default: Date.now()},
    endDate: {type: Date, default: Date.now()},
    teacher:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    link: {type: String, default: ''}
});



module.exports = mongoose.model('Batch', batch);
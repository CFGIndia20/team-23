const mongoose = require("mongoose")

const batch = mongoose.Schema({
    time: {type: String, default: ''},
    scoreRange: {type: String, default: ''},
    noOfStudent: {type: Number, default: 15},
    isFull: {type: Boolean, default: false},
    startDate: {type: Date, default: Date.now()},
    endDate: {type: Date, default: null},
    teacher:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    link: {type: String, default: ''}
});

module.exports = mongoose.model('Batch', batch);
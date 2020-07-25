const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, default: ''},
    email: {type: String, unique : true},
    password: {type: String, default: ''},
    category: {type: String, default: ''},
    status: {type: String, default: 'Activated'},
    batch: [{
        batchId: {type: mongoose.Schema.Types.ObjectId, ref: 'Batch'}
    }],
    skill: {type: String, default: ''},
    noOfSlotsAlloted : {type: Number, default: 0}
});

module.exports = mongoose.model('User', userSchema);
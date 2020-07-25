const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name: {type: String, unique: true, default: ''},
    email: {type: String, unique: true},
    password: {type: String, default: ''},
    category: {type: String, default: ''},
    status: {type: String, default: 'Activated'},
    batch: [{
        batchId: {type: mongoose.Schema.Types.ObjectId, ref: 'Batch'}
    }],
    skill: {type: String, default: ''}
});

module.exports = mongoose.model('User', userSchema);
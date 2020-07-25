const mongoose = require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose'); 
 

const userSchema = mongoose.Schema({
    fname: {type: String, unique: true, default: ''},
    lname: {type: String, unique: true, default: ''},
    email: {type: String, unique: true},
    password: {type: String, default: ''},
    category: {type: String, default: ''},
    status: {type: String, default: 'Activated'},
    batch: [{
        batchId: {type: mongoose.Schema.Types.ObjectId, ref: 'Batch'}
    }],
    skill: {type: String, default: ''}

    
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);
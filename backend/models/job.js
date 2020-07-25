const mongoose = require("mongoose")

const job = mongoose.Schema({
    recruiter:  {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    skillReq: {type: String, default: ''},
    companyName: {type: String, default: ''},
    isSelected: {type: Boolean, default: true}
});



module.exports = mongoose.model('Job', job);
const mongoose = require('mongoose');
const recruitSchema = new mongoose.Schema({ 
    notification: {type: Boolean,required: true},
    statusapplicant: {type: String,required: true},
    processapplicant: {type: String,required:true}
})
module.exports= mongoose.model('Recruit', recruitSchema)
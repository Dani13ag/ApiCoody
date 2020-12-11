const mongoose = require('mongoose');
const createOffersSchema = new mongoose.Schema({ 
    title:{type:String,required:true},
    description:{type:String,required:true},
    position:{type:String,required:true,unique:true},
    salary:{type:Number},
    location:{type:String,required:true},
    termTime:{type:Date,required:true}})
module.exports=mongoose.model('createOffers',createOffersSchema)
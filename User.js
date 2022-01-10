const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    createdAt:Date,
    updatedAt:Date,
    address:{
        street:String,
        city:String,
        country:String
        
    }

})
module.exports=mongoose.model ("User",userSchema)
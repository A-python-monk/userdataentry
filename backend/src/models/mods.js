const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    email:{
        type:String,
        required : true
    },
    password:{
        type:String,
        required:true
    },
    checked:{
        type:String,
    }
});

const userss= new mongoose.model("Userdata",userschema);
module.exports=userss;

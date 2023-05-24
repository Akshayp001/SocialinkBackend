const mongoose=require("mongoose");
const UserSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        
    },
    phn:{
        type:Number,
        required:true,

    },
    upic:{
        type:String,
        default:0,
    },
    dept:{
        type:String,
        default:0,
    },
    year:{
        type:Number,
        default:0,
    },

});
const Users=mongoose.model("Users",UserSchema);
module.exports=Users;

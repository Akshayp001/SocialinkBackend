const mongoose=require("mongoose");
const UserpSchema=new mongoose.Schema({
    uid:{
        type:String,
        required:true,
    },
    pcnt:{
        type:Number,
        default:0,
    },
    posts:{
        type:Array,
        default:0,
    },
    pbgpic:{
        type:String,
        default:0,
    }

});
const Userp=mongoose.model("Userp",UserpSchema);
module.exports=Userp;

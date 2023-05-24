const mongoose=require("mongoose");
const PostsSchema=new mongoose.Schema({
    caption:{
        type:String,
        required:true,
    },
    lcnt:{
        type:Number,
        default:0,
    },
    img:{
        type:String,
        default:0,
    },
    isLiked:{
        type:Boolean,
        required:true,
    },
    dt:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },

});
const Posts=mongoose.model("Posts",PostsSchema);
module.exports=Posts;

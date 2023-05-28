const mongoose=require("mongoose");
const CommentSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true,
    },
    dt: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
  });
  
  const PostsSchema = new mongoose.Schema({
    caption: {
      type: String,
      default:0,
    },
    lcnt: {
      type: Number,
      default: 0,
    },
    img: {
      type: String,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      required: true,
    },
    dt: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    larr: {
      type: [],
      default: 0,
    },
    carr: {
      type: [CommentSchema],
      default: [],
    },
  });
const Posts=mongoose.model("Posts",PostsSchema);
module.exports=Posts;

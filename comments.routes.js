const express=require("express");
const Posts = require("./posts.models");
const app=express();
app.post("/posts/:_id/comments", async (req, res) => {
    const postId = req.params._id;
    const { content, dt, uid } = req.body;
  
    try {
      const post = await Posts.findById(postId);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const newComment = {
        content,
        dt,
        uid,
      };
  
      post.carr.push(newComment);
      await post.save();
  
      res.json(post);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });



// app.get("/ucomments",async(request,response)=>{
//     const comments=await commentModel.find({});

//     try{
//         response.send(comments);

//     }catch(error){
//         response.status(500).send(error);
//     }
// });



app.get("/posts/:postId/comments", async (req, res) => {
    const postId = req.params.postId;
  
    try {
      const post = await Posts.findById(postId);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const comments = post.carr;
      res.json(comments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });


module.exports=app;
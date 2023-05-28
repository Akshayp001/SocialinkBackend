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



app.get("/posts/:_id/comments", async (req, res) => {
    const postId = req.params._id;
  
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


  app.post("/posts/addlike/:_id/:uid", async (req, res) => {
    const _id = req.params._id;
    const uid = req.params.uid;
  
    try {
      const post = await Posts.findById(_id);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      post.larr.push(uid);
      await post.save();
  
      res.json({ message: "User ID added to likes array in post" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });


  app.put("/posts/removelike/:_id/:userId", async (req, res) => {
    const _id = req.params._id;
    const userId = req.params.userId;
  
    try {
      const post = await Posts.findById(_id);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const updatedLikes = post.larr.filter((id) => id !== userId);
      post.larr = updatedLikes;
      await post.save();
  
      res.json({ message: "User ID removed from likes array in post" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });

  app.get("/posts/larr/:_id", async (req, res) => {
    const postId = req.params._id;
  
    try {
      const post = await Posts.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      const likesArray = post.larr;
      res.json(likesArray);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
module.exports=app;
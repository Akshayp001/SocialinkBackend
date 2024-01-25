const express=require("express");
const postModel=require("./posts.models");
const app=express();
app.post("/createpost",async(request,response)=>{
    const post=new postModel(request.body);

    try{
        await post.save();
        response.send(post);
    }catch(error){
        response.status(500).send(error);
    }
});

app.get("/posts",async(request,response)=>{
    const posts=await postModel.find({});

    try{
        console.log("requested ip is "+request.ip);
        console.log("requested remote address is "+request.connection.remoteAddress);
        response.send(posts);

    }catch(error){
        response.status(500).send(error);
    }
});

// app.get("/uposts",async(request,response)=>{
//     const posts=await postModel.find({});

//     try{
//         response.send(posts);

//     }catch(error){
//         response.status(500).send(error);
//     }
// });

app.get("/uposts/:userId",async(request,response)=>{
    const { userId } = request.params;
    const posts=await postModel.find({userId});

    try{
        response.send(posts);
    }catch(error){
        response.status(500).send(error);
    }
});

app.get("/posts/:_id",async(request,response)=>{
    const { _id } = request.params;
    const post=await postModel.findOne({_id});

    try{
        response.send(post);

    }catch(error){
        response.status(500).send(error);
    }
});

// Edit post caption
app.put("/posts/edit/:_id", async (req, res) => {
    const postId = req.params._id;
    const { caption } = req.body;
  
    try {
      const post = await postModel.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      post.caption = caption;
      await post.save();
  
      res.json({ message: "Post caption updated successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
  
  // Delete post by postId
  app.delete("/posts/delete/:_id", async (req, res) => {
    const postId = req.params._id;
  
    try {
      const post = await postModel.findById(postId);
  
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
  
      await post.deleteOne();
  
      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
  


module.exports=app;
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
    const posts=await postModel.findone({userId});

    try{
        response.send(posts);
    }catch(error){
        response.status(500).send(error);
    }
});


app.get("/posts/:_id",async(request,response)=>{
    const { _id } = request.params;
    const post=await postModel.find({_id});

    try{
        response.send(post);

    }catch(error){
        response.status(500).send(error);
    }
});


module.exports=app;
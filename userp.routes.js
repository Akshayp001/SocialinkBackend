const express=require("express");
const userpModel=require("./userp.models");
const app=express();
app.post("/add_up",async(request,response)=>{
    const userp=new userpModel(request.body);

    try{
        await userp.save();
        response.send(userp);
    }catch(error){
        response.status(500).send(error);
    }
});

app.get("/userps",async(request,response)=>{
    const userps=await userpModel.find({});

    try{
        response.send(userps);

    }catch(error){
        response.status(500).send(error);
    }
});
module.exports=app;
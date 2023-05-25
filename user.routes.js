const express=require("express");
const userModel=require("./user.models");
const app=express();
app.post("/add_user",async(request,response)=>{
    const user=new userModel(request.body);

    try{
        await user.save();
        response.send(user);
    }catch(error){
        response.status(500).send(error);
    }
});

app.get("/users",async(request,response)=>{
    const users=await userModel.find({});

    try{
        response.send(users);

    }catch(error){
        response.status(500).send(error);
    }
});

app.put("/users/:uid", async (request, response) => {
    const { uid } = request.params;
  
    try {
      const user = await userModel.findOneAndUpdate({ uid }, request.body, {
        new: true,
      });
      if (!user) {
        return response.status(404).send("User not found");
      }
      response.send(user);
    } catch (error) {
      response.status(500).send(error);
    }
  });
module.exports=app;



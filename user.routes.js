const express=require("express");
const userModel=require("./user.models");
const Users = require("./user.models");
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


app.get("/users/:uid",async(request,response)=>{
    const { uid } = request.params;
    const user=await userModel.findOne({uid});

    try{
        response.send(user);

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


app.put("/users/update-dept/:newDept", async (req, res) => {
    const newDept = req.params.newDept;
  
    try {
      await userModel.updateMany({}, { $set: { dept: newDept } });
  
      res.json({ message: "Dept field updated for all users" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
  app.put("/users/update-year/:newYear", async (req, res) => {
    const newYear = parseInt(req.params.newYear);
  
    try {
      await userModel.updateMany({}, { $set: { year: newYear } });
  
      res.json({ message: "Year field updated for all users" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  });
module.exports=app;



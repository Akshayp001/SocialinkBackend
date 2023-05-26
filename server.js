const express =require('express');
const mongoose =require("mongoose");
const pRouter=require("./posts.routes");
const uRouter=require("./user.routes");
const upRouter=require("./userp.routes");
const { deleteMany } = require('./posts.models');
const app=express();
app.use(express.json());

const username="test";
const password="test";
const clusterName="cluster0.ka6dgk0";
const databaseName="test";
const cors = require("cors");
app.use(cors());


mongoose.connect(
    `mongodb://127.0.0.1:27017/SocialLink`,
    // `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${databaseName}?
    // // retryWrites=true&w=majority`,
    {
    // useNewUrlParser:true,
    // useFindAndModify:false,
    // useUnifiedModify: false,
    // useUnifiedToplogy:true 
    }
);

const db=mongoose.connection;
db.on("error",console.error.bind(console,"connection failed: "));
db.once("open",function(){
    console.log("Connected to the Database Successfully ");
});

app.use(uRouter);
app.use(upRouter);
app.use(pRouter);
app.listen(3000,()=>{
    console.log("Server Connected On Post 3000");

});

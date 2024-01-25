const express =require('express');
const mongoose =require("mongoose");
const pRouter=require("./posts.routes");
const uRouter=require("./user.routes");
const upRouter=require("./userp.routes");
// const upRouter=require("./userp.routes");
const cRouter=require("./comments.routes");
const fRouter=require("./filters.routes");
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
    // `mongodb://127.0.0.1:27017/SocialLink`,
    `mongodb+srv://${username}:${password}@${clusterName}.mongodb.net/${databaseName}?
    // retryWrites=true&w=majority`,
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
app.use(cRouter);
app.use(fRouter);

// //check 
// exports.instantPay = functions.https.onRequest(async (req, res) => {
//     cors(req, res, async () => {
//         const {
//             country,
//             action
//         } = req.body;
//     })})
// ;

app.post('/temp', async (req, res) => {
    try {
        const { var1, var2 } = req.body;
        const result = var1 + var2;
        return res.json({ result });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error/Invalid Input' });
    }
});

app.listen(3000,()=>{
    console.log("Server Connected On Post 3000");

});
// const paymentSchema = new mongoose.Schema({
//     country: String,
//     action: String,
//     mobile_number: String,
//     amount: Number,
//     payment_method: Number,
//   });
  
//   const Payment = mongoose.model('Payment', paymentSchema);
  
//   // Handle POST request to /example
//   app.post('/instantPay', cors(), async (req, res) => {
//     const { country, action, mobile_number, amount, payment_method } = req.body;
  
//     // Create a new Payment instance
//     const newPayment = new Payment({
//       country,
//       action,
//       mobile_number,
//       amount,
//       payment_method,
//     });
  
//     try {
//       // Save the new payment to the database
//       const savedPayment = await newPayment.save();
  
//       // Log the saved payment to the console
//       console.log('Saved payment:', savedPayment);
  
//       // Send a response
//       res.status(200).json({ message: 'Data received and saved successfully' });
//     } catch (error) {
//       console.error('Error saving payment:', error);
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   });
  
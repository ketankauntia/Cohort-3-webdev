import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes"

dotenv.config();

const app=express();
const PORT = process.env.PORT;

app.use(express.json());
app.use("api/users", userRoutes);

// app.get('/',(req,res)=>{
//     res.send("API is running");
// })

mongoose.connect(process.env.MONGO_URL as string).then(()=>console.log("MongoDB Connected")).catch(e=>console.log(e))

app.listen(PORT, ()=>{
    console.log(`Port running on ${PORT}`);
})
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db";
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.json();
})



const port = process.env.PORT;
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
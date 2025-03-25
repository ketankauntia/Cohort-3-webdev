import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db";
import userRouter from "./routes/userRoutes";
import contentRouter from "./routes/contentRoutes";
import brainRouter from "./routes/shareBrainRoutes";
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", userRouter);
app.use("/api/v1", contentRouter);
app.use("/api/v1/brain", brainRouter);


app.get("/",(req,res)=>{
    res.json("Idhar kuch ni milega bete...");
})



const port = process.env.PORT;
app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
import express from "express";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import cors from "cors";
import { connectDB } from "./db";
import authRouter from "./routes/auth";

const dotenv = require("dotenv");
dotenv.config();

connectDB(); //connecting to mongoDB

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/v1/", authRouter);


const port = process.env.PORT;

mongoose
  .connect(process.env.MONGO_URL!)
  .then(() => {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  })
  .catch((err) => console.log(err));


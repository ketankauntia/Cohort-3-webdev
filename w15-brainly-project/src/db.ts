import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL as string; 

if (!url) {
  throw new Error("MONGO_URL is not defined in .env file");
}

export const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log("MongoDB Connected #############");
  } catch (error) {
    console.error("MongoDB Connection Error #################:", error);
    process.exit(1); 
  }
};

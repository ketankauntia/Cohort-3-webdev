import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`✅✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("❌❌ MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

export default connectDB;

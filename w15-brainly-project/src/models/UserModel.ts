import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // shareLink: { type: String, unique: true, sparse: true }, 
});

const userModel = mongoose.model("user",userSchema);
export default userModel;
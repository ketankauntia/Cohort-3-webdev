import mongoose from "mongoose";

const tagSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true }
});

const tagModel = mongoose.model("tag", tagSchema);
export default tagModel;
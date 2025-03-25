import mongoose from "mongoose";



const linkSchema = new mongoose.Schema({
    hash:{type:String, required:true, default: null},
    userId:{ type:mongoose.Schema.ObjectId, ref:"user" ,required:true},
    active:{type: Boolean, required:true, default:false}
})

const linkModel = mongoose.model("link", linkSchema);
export default linkModel;
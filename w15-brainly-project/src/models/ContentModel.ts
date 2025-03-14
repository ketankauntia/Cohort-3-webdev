import mongoose, { Types } from "mongoose";

const contentTypes =  ['image', 'video', 'article', 'audio'];

const contentSchema = new mongoose.Schema({
  link: { type: String, required: true },
  type: { type: String, enum: contentTypes, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: "Tag" }], // tags field in Tags table
  userId: { type: Types.ObjectId, ref: "User", required: true },    // userId in Users table
});

const contentModel = mongoose.model('content', contentSchema);
export default contentModel;

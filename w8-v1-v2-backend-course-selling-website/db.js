const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// user, admin, course, purchase
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

const coursesSchema = new Schema({
  title: String,
  description: String,
  imageUrl: String,
  price: Number,
  creatorId: ObjectId, //to be taken from adminSchema (admin schema is the creator id, like which admin has created the course)
});

const purchasesSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId,
});

// const userModel = mongoose.model("users", userSchema);
const userModel = mongoose.model("User", userSchema);
const adminModel = mongoose.model("admins", adminSchema);
const coursesModel = mongoose.model("courses", coursesSchema);
const purchasesModel = mongoose.model("purchases", purchasesSchema);

module.exports = {
  userModel,
  coursesModel,
  adminModel,
  purchasesModel,
};

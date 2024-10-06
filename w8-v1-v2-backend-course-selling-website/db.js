const mongoose = require("mongoose");
const Schema = mongoose.Schema();
const ObjectId = mongoose.ObjectId();

// user, admin, course, purchase
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { value: String, unique: true },
  password: String,
});

const adminSchema = new Schema({
  firstName: String,
  lastName: String,
  email: { value: String, unique: true },
  password: String,
});

const coursesSchema = new Schema({
  courseTitle: String,
  courseDetails: String,
  coruseImage: String,
  coursePrice: String,
  courseCreatorId: ObjectId, //to be taken from adminSchema (admin schema is the creator id, like which admin has created the course)
});

const purchasesSchema = new Schema({
  courseId: ObjectId,
  userId: ObjectId,
});

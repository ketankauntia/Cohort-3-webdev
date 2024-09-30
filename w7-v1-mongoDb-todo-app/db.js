const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

//schema : is the structure of the data i want to put in my db's collection
const User = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

const Todo = new mongoose.Schema({
  title: String,
  done: Boolean,
  userId: ObjectId, // every entery/object in the collection/table of db is given a unique object id.
  // --------------- so we are referencing that unique id to get which user it is.
});

// model : lets us put the data into the specific table/collection
// models can be exported as well

const userModel = mongoose.model("users", User); // mongoose.model( name of the collection/table, data to insert )
const todoModel = mongoose.model("todos", Todo);

//exporting the user and todo "OBJECT"
module.exports = {
  userModel: userModel,
  todoModel: todoModel,
};

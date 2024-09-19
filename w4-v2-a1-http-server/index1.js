// Trying to code an in memory todo app
const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();

// Add these middlewares to parse JSON and URL-encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let filepath = path.join("__DIRNAME", "todos.json");
let todos = [];

app.get("/", function (req, res) {
  res.send(todos);
  //   console.log(res);
  //   console.log(`Response : ${res}`);
  //   console.log(`Request : ${req}`);
});

app.post("/", function (req, res) {
  console.log("In the add todo route");
  //   res.send("Response recieved");
  //   console.log("Request Body:", JSON.stringify(req.body, null, 2));

  let value = req.body.data;

  //   let value = JSON.stringify(req.body.data);
  //   console.log(value);

  let id = todos.length > 0 ? todos.length + 1 : 1;

  //   console.log(id);

  todos.push({ id: id, data: value });
  //   console.log(todos);

  res.send(todos);
});

app.patch("/", function (req, res) {
  console.log("Update Route");

  const searchid = req.body.id;
  const newdata = req.body.data;
  // console.log(searchid, " ", newdata);
  if (todos.length >= searchid) {
    todos[searchid - 1].data = newdata;
    res.send(`Update successfull : ${JSON.stringify(todos, null, 2)}`);
    // console.log(todos);
  } else {
    res.send("TODO does not exist");
  }
});

app.delete("/", function (req, res) {
  console.log("In the delete route");

  const deleteid = req.body.id;

  if (todos.length > deleteid) {
    todos = todos.filter((todo) => todo.id !== deleteid);
    console.log(`${JSON.stringify(todos, null, 2)}`);
    res.send(`Delete successfull : ${JSON.stringify(todos, null, 2)}`);
  } else {
    res.send("Value does not exist");
  }
});

app.listen(3000);

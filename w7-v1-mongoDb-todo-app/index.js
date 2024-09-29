const express = require("express");

//acessing the todo and user model exported from db.js
const { userModel, todoModel } = require("./db.js");

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await userModel.insert({
    //this will give me a promise since it will be an asynchronous fucntion as it will talk to a server in bahrain or some other country and then return me the task done. SO, we shoudls await it.
    name: "Ketan",
    pass: "1234",
    email: "kk@gmail.com",
  });

  res.json({
    msg: "You ahve been signed up succesfully",
  });
});

app.post("/signin", function (req, res) {});

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});

app.listen(3000);

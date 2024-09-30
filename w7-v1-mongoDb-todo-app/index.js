const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "BholaMaharaj";
const mongoose = require("mongoose");

//acessing the todo and user model exported from db.js
const { userModel, todoModel } = require("./db.js");

mongoose.connect(
  "mongodb+srv://ketankauntia26:kUpZGqnJKCTE4m1Y@cluster0.jz9ux.mongodb.net/w7-ketan-todo"
);

const app = express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  await userModel.create({
    //this will give me a promise since it will be an asynchronous fucntion as it will talk to a server in bahrain or some other country and then return me the task done. SO, we shoudls await it.
    name: name,
    password: password,
    email: email,
  });

  res.json({
    msg: "You have been signed up succesfully",
  });
});

app.post("/signin", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const User = await userModel.findOne({
    //since it will hit the db, so we need to wait till we get the user is present or not in the db or are teh credentials valid or not.
    email: email,
    password: password,
  });

  console.log(User);

  if (User) {
    const token = jwt.sign(
      {
        user: User._id.toString(), // _id is a unique objectId assigned by mongodb whenever an value is inserted.
      }, // User._id is not a string but an objectId of a class. So, we need to convert it into a string
      JWT_SECRET
    );
    res.json({
      token: token,
    });
  } else {
    res.send(403).json({
      message: "Invalid Credentials",
    });
  }
});

app.post("/todo", authMiddleware, function (req, res) {
  const userId = req.userId;

  res.json({
    userId: userId,
  });
});

app.get("/todos", authMiddleware, function (req, res) {
  const userId = req.userId;

  res.json({
    userId: userId,
  });
});

function authMiddleware(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_SECRET);
  console.log(decodedData);
  if (decodedData) {
    req.userId = decodedData.user;
    next();
  } else {
    res.status(403).json({
      message: "Invalid Token/credentials",
    });
  }
}

app.listen(3000);

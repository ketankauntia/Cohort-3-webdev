const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    msg: "Hi there",
  });
});

app.get("/user/signup", function (req, res) {
  res.json({
    msg: "Signed up succesfully",
  });
});

app.get("/user/login", function (req, res) {
  res.json({
    msg: "Logged in succesfully",
  });
});

app.get("/courses/purchase", function (req, res) {
  res.json({
    msg: "Hi there",
  });
});

app.get("/courses/view", function (req, res) {
  res.json({
    msg: "Hi there",
  });
});

app.listen(3000);

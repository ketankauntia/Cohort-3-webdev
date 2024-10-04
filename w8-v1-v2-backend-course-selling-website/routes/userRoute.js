const { Router } = require("express");

const userRouter = Router();

userRouter.post("/user/signup", function (req, res) {
  res.json({
    msg: "Signed up succesfully",
  });
});

userRouter.post("/user/purchases", function (req, res) {
  res.json({
    msg: "Signed up succesfully",
  });
});

userRouter.post("/user/login", function (req, res) {
  res.json({
    msg: "Logged in succesfully",
  });
});

module.exports = {
  userRouter: userRouter,
};

const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  res.json({
    msg: "Signed up succesfully",
  });
});

userRouter.get("/purchases", function (req, res) {
  res.json({
    msg: "Signed up succesfully",
  });
});

userRouter.post("/login", function (req, res) {
  res.json({
    msg: "Logged in succesfully",
  });
});

module.exports = {
  userRouter: userRouter,
};

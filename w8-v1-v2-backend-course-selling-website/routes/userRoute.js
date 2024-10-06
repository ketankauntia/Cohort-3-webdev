const { Router } = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
  const requiredBody = z.object({
    email: z.string().min(5).max(50),
    firstName: z.string().min(5).max(25),
    lastName: z.string().min(5).max(25),
    password: z.string().min(5).max(40),
  });

  const parsedBody = requiredBody.safeParse(req.body);

  if (!parsedBody.success) {
    res.json({
      message: "Failed to signup. Enter the required details correctly",
      error: parsedBody.error,
    });
    return;
  }
  //todo: hashing the password & then working on the hashed password

  userModel.create({
    email,
    firstName,
    lastName,
    password,
  });

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

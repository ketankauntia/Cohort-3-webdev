const { Router } = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userRouter = Router();
const { userModel } = require("../db"); // Adjust the path as per your folder structure

userRouter.post("/signup", async function (req, res) {
  // console.log(`${req.body}`);
  const requiredBody = z.object({
    email: z.string().email().min(5).max(50),
    firstName: z.string().min(5).max(25),
    lastName: z.string().min(5).max(25),
    password: z.string().min(5).max(40),
  });

  const parsedBody = requiredBody.safeParse(req.body);

  // console.log(`Passed parsedBody`);

  if (!parsedBody.success) {
    res.json({
      message: "Failed to signup. Enter the required details correctly",
      error: parsedBody.error,
    });
    return;
  }

  // console.log(`Passed ZOD validation`);

  //todo: hashing the password & then working on the hashed password

  const { email, firstName, lastName, password } = parsedBody.data;
  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });
  } catch (e) {
    console.log(`error: ${e}`);
    res.json({
      error: e,
    });
    errorThrown = true;
  }
  // console.log(`Passed bcrypt hashing`);

  if (!errorThrown) {
    res.json({
      msg: "Signed up succesfully",
    });
  }
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

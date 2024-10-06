const { Router } = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = Router();

userRouter.post("/signup", async function (req, res) {
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
  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
      email,
      firstName,
      lastName,
      password,
    });
  } catch (e) {
    console.log(`error: ${e}`);
    res.json({
      error: e,
    });
    errorThrown = true;
  }

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

import express from "express";
import { Router } from "express";
import bcrypt from "bcryptjs";
import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const authRouter = Router();

authRouter.post("/signup", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const exisitingUser = await UserModel.findOne({ username });
    if (exisitingUser) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({ username, password: hashedPassword });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (e) {
    res.status(500).json({ message: "Something went wrong" });
  }
});

authRouter.post("/signin", async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const foundUser = await UserModel.findOne({ username });
    if (!foundUser) {
      res.status(401).json({ message: "Invalid User" });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, foundUser.password);
    if (!isPasswordValid) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }

    if (!process.env.JWT_SECRET) {
      res.status(500).json({ message: "JWT Secret is missing" });
      return;
    }

    const token = jwt.sign({ id: foundUser._id }, process.env.JWT_SECRET );

    res.json({
      message: "Logged in successfully",
      token,
    });
    return;
  } catch (e) {
    res.status(500).json({ message: "Unable to sign in" });
    return;
  }
});

export default authRouter;

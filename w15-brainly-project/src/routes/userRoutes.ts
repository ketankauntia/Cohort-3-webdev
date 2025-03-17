import express from "express";
import userModel from "../models/UserModel";

import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();
const userRouter = express.Router();

userRouter.post('/signup', async (req,res)=>{

    const {username, password} = req.body;

    if(!username || !password){
        res.status(411).json({message : "no username or password"})
        return;
    }

    try{
        const existingUser = await userModel.findOne({username});
        if(existingUser){
            res.status(403).json({message:"user already exists"});
            return;
        }

        const hashedPassword = await bcrypt.hash(password,10);

        const newUser = new userModel({
            username,
            password: hashedPassword
        })

        await newUser.save();

        res.status(200).json({message:"Signup successfully"});

    } catch(e){
        res.status(500).json({
            message:"Internal error while signing up."
        })
    }
})

userRouter.post('/signin', async (req,res)=>{
    const {username, password} = req.body;

    try{
        
        if(!username || !password){
            res.status(403).json({
                message:"invalid username / password"
            })
            return;
        }
        
        const validUser = await userModel.findOne({username});
        
        if(!validUser){
            res.status(403).json({
                message:"Not signedin"
            });
            return;
        }
        
        const validPassword = await bcrypt.compare(password, validUser.password);

        if(!validPassword){
            res.status(403).json({
                message:"invalid password"
            });
            return;
        }

        const token = jwt.sign({id: validUser._id},process.env.JWT_SECRET as string);

        res.status(200).json({
            token
        })
        return;
    } catch(e){
        res.status(500).json({
            message:"error while signing in."
        })
        return;
    }
})

export default userRouter;
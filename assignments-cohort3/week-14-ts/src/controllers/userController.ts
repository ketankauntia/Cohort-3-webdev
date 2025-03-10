import {Request,Response} from "express";
import User from '../models/Users';

//fetch all users
export const getUsers = async(req:Request, res:Response)=>{
    try{
        const users = await User.find();
        res.json(users);
    } catch(err){
        res.status(500).json({
            error:"Server error"
        })
    }
}

//add a new user
export const createUser = async(req:Request, res:Response)=>{
    try{
        const {name,email} = req.body;
        const user = new User ({name,email});
        await user.save();
        res.status(201).json(user);

    } catch(e){
        res.status(300).json({
            message:"unable to create user"
        })
    }
}
import express, { Router } from "express";
import contentModel from "../models/ContentModel";
import { authMiddleware } from "../middlewares/authMiddleware";
import { Request,Response } from "express";
const contentRouter = express.Router();

contentRouter.post('/api/v1/content', authMiddleware, async (req:Request,res:Response)=>{
    
    try{
        // cannot take userId from body since, A malicious user could send a request with a different userId, creating content for another user.
        const {link, type, title, tags} = req.body;
        const userId = req.user!.id;

        if(!link || !type || !title ){
            res.status(201).json({
                message:"incomplete content. Fill all details"
            })
            return;
        }

        const newContent = new contentModel({
            link, type, title, tags, userId
        })

        await newContent.save();
        res.status(200).json({
            message:"content saved"
        })
        return;

    } catch(e){
        res.status(500).json({ error:e, message: "Error adding content." });
    }
})

contentRouter.get('/api/v1/content',authMiddleware, async (req,res)=>{
    try{
        const userId = req.user;
        const fetchedContent = await contentModel.find({userId}).populate("tags");
        // .populate("tags") for full details of the tags instead of just the ObjectIds.

        res.status(200).json({fetchedContent});
    } catch(e){
        res.status(201).json({
            message: "internal server error. Error fetching contents"
        })
    }
});

contentRouter.delete('/api/v1/content',authMiddleware, async (req,res)=>{

    try{
        const {contentId} = req.body;
        const userId = req.user!.id;

        const foundContent = await contentModel.findById(contentId);

        if(!foundContent){
            res.status(404).json({
                message:"no such course exists"
            })
            return;
        }

        if(foundContent.userId?.toString() !== userId){
            res.status(403).json({
                message:"dont try to delete someone else's content. You cheeky little ************"
            })
        }

        await foundContent.findOneAndDelete({id: contentId});


        // await contentModel.deleteOne({
        //     contentId,
        //     userId:req.userId
        // })


        res.status(200).json({
            message:"deleted succesfully"
        })
        return;

    }catch(e){
        res.status(500).json({ message: "Error deleting content. Internal server error" });
    }
});



import express from "express";
import crypto from "crypto"; 
import userModel from "../models/UserModel";
import { authMiddleware } from "../middlewares/authMiddleware";

const brainRouter = express.Router();

brainRouter.post('/share', authMiddleware, async (req,res)=>{
    
    try{
        const userId = req.user?.id;
        const {share} = req.body;

        if( typeof share !== "boolean"){
            res.status(400).json({
                message:"invalid request"
            });
            return;
        }   
        const shareLink = share? crypto.randomBytes(10).toString("hex") : null;

        await userModel.findByIdAndUpdate(userId,{shareLink},{new:true});

        res.status(200).json({ link: shareLink ? `/api/v1/brain/${shareLink}` : null });
        return;
    }catch(e){
        res.status(500).json({ message: "Error generating shareable link", error:e });
        return;
    }

})

brainRouter.get('/:shareLink', async (req, res) => {
    try {
        // 
    } catch (error) {
         res.status(500).json({ message: "Error fetching shared content", error });
         return;
    }
});

export default brainRouter;
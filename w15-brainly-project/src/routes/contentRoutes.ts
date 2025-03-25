import express, { Router } from "express";
import contentModel from "../models/ContentModel";
import { authMiddleware } from "../middlewares/authMiddleware";
import { Request, Response } from "express";
const contentRouter = express.Router();
import "./types/express";

contentRouter.post('/content', authMiddleware, async (req: Request, res: Response) => {
    try {
        const { link, type, title, tags } = req.body;
        const userId = req.user!.id;

        if (!link || !type || !title) {
            res.status(201).json({
                message: "incomplete content. Fill all details"
            });
            return;
        }

        const newContent = new contentModel({
            link, type, title, tags, userId
        });

        await newContent.save();
        res.status(200).json({
            message: "content saved"
        });
        return;
    } catch (e) {
        res.status(500).json({ error: e, message: "Error adding content." });
        return;
    }
});

contentRouter.get('/content', authMiddleware, async (req, res) => {
    try {
        const userId = req.user;
        const fetchedContent = await contentModel.find({ userId }).populate("tags");
        res.status(200).json({ fetchedContent });
        return;
    } catch (e) {
        res.status(201).json({
            message: "internal server error. Error fetching contents"
        });
        return;
    }
});

contentRouter.delete('/content', authMiddleware, async (req, res) => {
    try {
        const { contentId } = req.body;
        const userId = req.user!.id;

        const foundContent = await contentModel.findById(contentId);

        if (!foundContent) {
            res.status(404).json({
                message: "no such course exists"
            });
            return;
        }

        if (foundContent.userId?.toString() !== userId) {
            res.status(403).json({
                message: "dont try to delete someone else's content. You cheeky little ************"
            });
            return;
        }

        await contentModel.findOneAndDelete({ _id: contentId });
        res.status(200).json({
            message: "deleted succesfully"
        });
        return;
    } catch (e) {
        res.status(500).json({ message: "Error deleting content. Internal server error" });
        return;
    }
});

export default contentRouter;

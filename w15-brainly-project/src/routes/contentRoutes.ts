import express, { Router } from "express";
import contentModel from "../models/ContentModel";
import { authMiddleware } from "../middlewares/authMiddleware";
import { Request, Response } from "express";
import mongoose from "mongoose";
const contentRouter = express.Router();

contentRouter.post(
  "/content",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { link, type, title, tags } = req.body;
      const userId = req.user!.id;

      if (!link || !type || !title) {
        res.status(400).json({
          message: "incomplete content. Fill all details",
        });
        return;
      }

      const newContent = new contentModel({
        link,
        type,
        title,
        tags: Array.isArray(tags) ? tags : [],
        userId,
      });

      await newContent.save();
      res.status(201).json({
        message: "content saved",
      });
      return;
    } catch (e) {
      res.status(500).json({ error: e, message: "Error adding content." });
      return;
    }
  }
);

contentRouter.get("/content", authMiddleware, async (req, res) => {
  try {
    // const userId = req.user!.id; // not a string but an objectId re..
    const userId = new mongoose.Types.ObjectId(req.user!.id);

    // const fetchedContent = await contentModel.find({ userId }).populate("tags");
    // const fetchedContent = await contentModel.find({ userId });
    const fetchedContent = await contentModel.find({ userId });

    if (fetchedContent.some((content) => content.tags.length > 0)) {
      await contentModel.populate(fetchedContent, { path: "tags" });
    }

    // console.log(fetchedContent);

    res.status(200).json({ fetchedContent });
    return;
  } catch (e) {
    res.status(500).json({
      message: "internal server error. Error fetching contents",
      error: e,
    });
    return;
  }
});

// contentRouter.delete("/content", authMiddleware, async (req, res) => {
//   try {
//     const { contentId } = req.body;
//     const userId = req.user!.id;

//     const foundContent = await contentModel.findById(contentId);

//     if (!foundContent) {
//       res.status(404).json({
//         message: "no such course exists",
//       });
//       return;
//     }

//     if (foundContent.userId?.toString() !== userId) {
//       res.status(403).json({
//         message:
//           "dont try to delete someone else's content. You cheeky little ************",
//       });
//       return;
//     }

//     await contentModel.findOneAndDelete({ _id: contentId });
//     res.status(200).json({
//       message: "deleted succesfully",
//     });
//     return;
//   } catch (e) {
//     res
//       .status(500)
//       .json({ message: "Error deleting content. Internal server error" });
//     return;
//   }
// });

contentRouter.delete("/content", authMiddleware, async (req, res) => {
    try {
      const { contentId } = req.body;
      const userId = req.user!.id; // Ensure this is correct
  
      console.log("User making request:", userId);
      console.log("Content ID to delete:", contentId);
  
      // Fetch content and make sure userId is included
      const foundContent = await contentModel.findById(contentId).select("userId");
  
      if (!foundContent) {
        res.status(404).json({ message: "No such content exists." });
        return;
      }
  
      console.log("Found Content Owner:", foundContent.userId?.toString());
  
      // Ensure foundContent.userId exists and strictly matches userId
      if (!foundContent.userId || foundContent.userId.toString() !== userId.toString()) {
        res.status(403).json({
          message: "You are not authorized to delete this content.",
        });
        return;
      }
  
      await contentModel.findByIdAndDelete(contentId);
      res.status(200).json({ message: "Deleted successfully" });
      return;
  
    } catch (e) {
      console.error("Error deleting content:", e);
      res.status(500).json({ message: "Error deleting content. Internal server error" });
      return;
    }
  });
  

export default contentRouter;

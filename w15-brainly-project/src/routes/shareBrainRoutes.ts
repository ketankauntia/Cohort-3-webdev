import express from "express";
import mongoose from "mongoose";
import { authMiddleware } from "../middlewares/authMiddleware";
import { randomLinkGenerator } from "../utils";
import linkModel from "../models/LinkModel";
import contentModel from "../models/ContentModel";

const brainRouter = express.Router();


interface ILink extends mongoose.Document {
  hash: string | null;
  userId: mongoose.Types.ObjectId;
  active: boolean;
}

// generating link to share
brainRouter.post("/share", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?.id;
    const { share } = req.body;

    if (typeof share !== "boolean") {
       res.status(400).json({ message: "Invalid request" });
       return
    }

    let existingLink = await linkModel.findOne({ userId }) as ILink | null;

    let shareLink: string | null = null;

    if (existingLink) {
      // if link already is exisitng
      if (share) {
        existingLink.hash = randomLinkGenerator(20); // Generate a new link
        existingLink.active = true;
        shareLink = existingLink.hash;
      } else {
        existingLink.hash = null; // Remove the hash when deactivating
        existingLink.active = false;
      }
      await existingLink.save();
    } else if (share) {
      // creating new since never created one
      shareLink = randomLinkGenerator(20);
      await linkModel.create({ hash: shareLink, userId, active: true });
    }

    res.status(200).json({ link: shareLink ? `/api/v1/brain/${shareLink}` : null });
    return;
  } catch (error) {
    console.error("Error generating shareable link:", error);
    res.status(500).json({ message: "Error generating shareable link", error });
    return;
  }
});

// getting other's brain via link
brainRouter.get("/:shareLink", async (req, res) => {
  try {
    const { shareLink } = req.params;

    const validLink = await linkModel.findOne({ hash: shareLink });

    if (!validLink || !validLink.active) {
       res.status(404).json({ message: "Invalid or inactive link" });
       return
    }

    const allUserContent = await contentModel.find({ userId: validLink.userId });

    if (!allUserContent.length) {
       res.status(404).json({ message: "No content found for this user" });
       return
    }

     res.status(200).json({
      message: "User's shared content retrieved successfully",
      data: allUserContent,
    });
    return
  } catch (error) {
    console.error("Error fetching shared content:", error);
     res.status(500).json({ message: "Error fetching shared content", error });
     return
  }
});

export default brainRouter;

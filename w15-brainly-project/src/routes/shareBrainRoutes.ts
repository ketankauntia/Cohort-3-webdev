import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { randomLinkGenerator } from "../utils";
import linkModel from "../models/LinkModel";
import contentModel from "../models/ContentModel";

const brainRouter = express.Router();

brainRouter.post("/share", authMiddleware, async (req, res) => {
  try {
    const userId = req.user?.id;
    const { share } = req.body;

    if (typeof share !== "boolean") {
      res.status(400).json({
        message: "invalid request",
      });
      return;
    }
    const shareLink = share ? randomLinkGenerator(20) : null;

    await linkModel.create({ hash: shareLink, userId: userId, active: true });

    res
      .status(200)
      .json({ link: shareLink ? `/api/v1/brain/${shareLink}` : null });
    return;
  } catch (e) {
    res
      .status(500)
      .json({ message: "Error generating shareable link", error: e });
    return;
  }
});

brainRouter.get("/:shareLink", async (req, res) => {
  try {
    const sharedLink = req.params.shareLink;

    const validLink = await linkModel.findOne({ sharedLink });

    if (!validLink) {
      res.status(404).json({
        message: "invalid link",
      });
      return;
    }
    const userId = validLink.userId;

    const allUserContent = await contentModel.find({ userId });

    if (!allUserContent.length) {
      res.status(404).json({ message: "No content found for this user" });
      return;
    }

    res.status(200).json({
      message: "User's shared content retrieved successfully",
      data: allUserContent,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching shared content", error });
    return;
  }
});

export default brainRouter;

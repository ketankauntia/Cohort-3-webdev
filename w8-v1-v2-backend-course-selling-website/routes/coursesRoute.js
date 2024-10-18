const { Router } = require("express");
const coursesRouter = Router();

const { purchasesModel, coursesModel } = require("../db.js");
const { userAuthMiddleware } = require("../middlewares/userMiddleware.js");

coursesRouter.post("/purchase", userAuthMiddleware, async function (req, res) {
  const userId = req.userId;
  const courseId = req.body.courseId;

  await purchasesModel.create({
    userId,
    courseId,
  });

  res.json({
    msg: "you have successfully bought the course",
  });
});

coursesRouter.get("/view", async function (req, res) {
  const courses = await coursesModel.find({});

  res.json({
    msg: "All courses",
    courses,
  });
});

module.exports = { coursesRouter: coursesRouter };

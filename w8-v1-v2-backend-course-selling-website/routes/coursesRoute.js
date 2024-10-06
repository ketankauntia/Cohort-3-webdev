const { Router } = require("express");
const coursesRouter = Router();

coursesRouter.post("/courses/purchase", function (req, res) {
  res.json({
    msg: "Hi there",
  });
});

coursesRouter.get("/courses/view", function (req, res) {
  res.json({
    msg: "Hi there",
  });
});

module.exports = { coursesRouter: coursesRouter };

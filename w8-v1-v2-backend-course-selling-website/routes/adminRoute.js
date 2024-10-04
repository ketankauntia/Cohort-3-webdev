const { Router } = require("express");
const adminRouter = Router();
// admin login, admin signup, create a course, delete a course, add course content

adminRouter.post("/login", function (req, res) {
  res.json({
    msg: "signed in succesfully as admin",
  });
});

adminRouter.post("/signup", function (req, res) {
  res.json({
    msg: "signed up succesfully as admin",
  });
});

adminRouter.post("/create-course", function (req, res) {
  res.json({
    msg: "signed in succesfully as admin",
  });
});

adminRouter.delete("/delete-course", function (req, res) {
  res.json({
    msg: "signed in succesfully as admin",
  });
});

adminRouter.update("/edit-course-content", function (req, res) {
  res.json({
    msg: "signed in succesfully as admin",
  });
});

module.exports = {
  adminRouter: adminRouter,
};

function createAdminRoutes(app) {
  // admin login, admin signup, create a course, delete a course, add course content

  app.post("/login", function (req, res) {
    res.json({
      msg: "signed in succesfully as admin",
    });
  });

  app.post("/signup", function (req, res) {
    res.json({
      msg: "signed up succesfully as admin",
    });
  });

  app.post("/create-course", function (req, res) {
    res.json({
      msg: "signed in succesfully as admin",
    });
  });

  app.delete("/delete-course", function (req, res) {
    res.json({
      msg: "signed in succesfully as admin",
    });
  });

  app.update("/edit-course-content", function (req, res) {
    res.json({
      msg: "signed in succesfully as admin",
    });
  });
}

module.exports = {
  createAdminRoutes: createAdminRoutes,
};

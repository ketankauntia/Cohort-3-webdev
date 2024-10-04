function createCoursesRoute(app) {
  app.get("/courses/purchase", function (req, res) {
    res.json({
      msg: "Hi there",
    });
  });

  app.get("/courses/view", function (req, res) {
    res.json({
      msg: "Hi there",
    });
  });
}

module.exports = { createCoursesRoute: createCoursesRoute };

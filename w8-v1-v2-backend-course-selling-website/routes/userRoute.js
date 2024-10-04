function createUserRoutes(app) {
  app.post("/user/signup", function (req, res) {
    res.json({
      msg: "Signed up succesfully",
    });
  });

  app.post("/user/purchases", function (req, res) {
    res.json({
      msg: "Signed up succesfully",
    });
  });

  app.post("/user/login", function (req, res) {
    res.json({
      msg: "Logged in succesfully",
    });
  });
}

module.exports = {
  createUserRoutes: createUserRoutes,
};

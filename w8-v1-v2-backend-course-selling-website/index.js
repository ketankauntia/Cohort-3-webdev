const express = require("express");
const app = express();
const { createUserRoutes } = require("./routes/userRoute.js");
const { createUserRoutes } = require("./routes/coursesRoute.js");
const { createAdminRoutes } = require("./routes/adminRoute.js");

app.use(express.json());

createUserRoutes(app);
createCoursesRoute(app);
createAdminRoutes(app);

app.get("/", function (req, res) {
  res.json({
    msg: "Hi there",
  });
});

app.listen(3000);

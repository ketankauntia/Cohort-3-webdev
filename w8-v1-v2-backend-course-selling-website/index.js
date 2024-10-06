const express = require("express");
const app = express();

const { userRouter } = require("./routes/userRoute.js");
const { coursesRouter } = require("./routes/coursesRoute.js");
const { adminRouter } = require("./routes/adminRoute.js");

app.use(express.json());

app.use("api/v1/user", userRouter);
app.use("api/v1/courses", coursesRouter);
app.use("api/v1/admin", adminRouter);

app.listen(3000);

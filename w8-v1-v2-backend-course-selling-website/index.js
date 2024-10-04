const express = require("express");
const app = express();

const { userRouter } = require("./routes/userRoute.js");
const { coursesRouter } = require("./routes/coursesRoute.js");
const { adminRouter } = require("./routes/adminRoute.js");

app.use(express.json());

app.use("/user", userRouter);
app.use("/courses", coursesRouter);
app.use("/admin", adminRouter);

app.listen(3000);

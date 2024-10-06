const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

const { userRouter } = require("./routes/userRoute.js");
const { coursesRouter } = require("./routes/coursesRoute.js");
const { adminRouter } = require("./routes/adminRoute.js");

app.use(express.json());

app.use("api/v1/user", userRouter);
app.use("api/v1/courses", coursesRouter);
app.use("api/v1/admin", adminRouter);

//we made this async-await function so that, we first connect to the db and then listen on the server/backend.
//if the db connection gives us an error, then the app crashes
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(3000);
  console.log("Listening on port 3000");
}

main();

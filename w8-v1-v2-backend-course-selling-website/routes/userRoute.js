const { Router } = require("express");
const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userRouter = Router();

const { userModel, purchasesModel, coursesModel } = require("../db"); // Adjust the path as per your folder structure
const { userAuthMiddleware } = require("../middlewares/userMiddleware.js");

userRouter.post("/signup", async function (req, res) {
  // console.log(`${req.body}`);
  const requiredBody = z.object({
    email: z.string().email().min(5).max(50),
    firstName: z.string().min(5).max(25),
    lastName: z.string().min(5).max(25),
    password: z.string().min(5).max(40),
  });

  const parsedBody = requiredBody.safeParse(req.body);

  // console.log(`Passed parsedBody`);

  if (!parsedBody.success) {
    res.json({
      message: "Failed to signup. Enter the required details correctly",
      error: parsedBody.error,
    });
    return;
  }

  // console.log(`Passed ZOD validation`);

  //todo: hashing the password & then working on the hashed password

  const { email, firstName, lastName, password } = parsedBody.data;
  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await userModel.create({
      email,
      firstName,
      lastName,
      password: hashedPassword,
    });
  } catch (e) {
    console.log(`error: ${e}`);
    res.json({
      error: e,
    });
    errorThrown = true;
  }
  // console.log(`Passed bcrypt hashing`);

  if (!errorThrown) {
    res.json({
      msg: "Signed up succesfully",
    });
  }
});

//cookie logic for later
userRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;

  try {
    // find if user exists by searching for its email in db entry
    const foundUser = await userModel.findOne({
      email,
    });
    // then, compare the plaintext password to the hashedpassword from db,
    if (foundUser && (await bcrypt.compare(password, foundUser.password))) {
      //issue the token via _userId
      const token = jwt.sign(
        {
          id: foundUser._id,
        },
        process.env.JWT_SECRET
      );
      // console.log(token);

      res.json({
        msg: "Logged in succesfully",
        token,
      });
    } else {
      res.json({
        message: "Invalid Credentials.Couldn't sign-in",
      });
    }
  } catch (error) {
    console.log("Error during sign-in:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});

userRouter.use(userAuthMiddleware);

userRouter.get("/purchases", async function (req, res) {
  const userId = req.userId;

  const purchases = await purchasesModel.find({
    userId,
  });

  let purchasedCourseIds = [];

  for (let i = 0; i < purchases.length; i++) {
    purchasedCourseIds.push(purchases[i].courseId);
  }
  const coursesData = await coursesModel.find({
    _id: { $in: purchasedCourseIds },
  });

  res.json({
    msg: "All Purchases here",
    purchases,
    coursesData,
  });
});

module.exports = {
  userRouter: userRouter,
};

const { Router } = require("express");
const adminRouter = Router();

const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { adminModel } = require("../db.js");
const { adminAuthMiddleware } = require("../adminMiddleware.js");

// admin login, admin signup, create a course, delete a course, add course content

adminRouter.post("/signup", async function (req, res) {
  const requiredBody = z.object({
    email: z.string().email().min(5).max(50),
    firstName: z.string().min(5).max(25),
    lastName: z.string().min(5).max(25),
    password: z.string().min(5).max(40),
  });

  const parsedBody = requiredBody.safeParse(req.body);

  if (!parsedBody.success) {
    res.json({
      message: "Failed to signup. Enter the required details correctly",
      error: parsedBody.error,
    });
    return;
  }

  const { email, firstName, lastName, password } = parsedBody.data;

  let errorThrown = false;
  try {
    const hashedPassword = await bcrypt.hash(password, 5);

    await adminModel.create({
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

  if (!errorThrown) {
    res.json({
      msg: "Admin Signed up succesfully",
    });
  }
});

adminRouter.post("/signin", async function (req, res) {
  const { email, password } = req.body;
  try {
    const foundAdmin = await adminModel.findOne({ email });

    if (foundAdmin && (await bcrypt.compare(password, foundAdmin.password))) {
      const token = jwt.sign(
        {
          id: foundAdmin._id,
        },
        process.env.JWT_SECRET_KEY_ADMIN
      );

      res.json({
        message: "Signed in succesfully",
        token,
      });
    } else {
      res.status(403).json({
        message: "Invalid Credentials",
      });
    }
  } catch (e) {
    res.status(403).json({
      message: e.message,
    });
  }
});

adminRouter.use(adminAuthMiddleware);

adminRouter.put("/create-course", function (req, res) {
  res.json({
    msg: "In admin /create-course",
  });
});

adminRouter.delete("/delete-course", function (req, res) {
  res.json({
    msg: "In admin /delete-course",
  });
});

adminRouter.post("/edit-course-content", function (req, res) {
  res.json({
    msg: "In admin /edit-course-content",
  });
});

module.exports = {
  adminRouter: adminRouter,
};

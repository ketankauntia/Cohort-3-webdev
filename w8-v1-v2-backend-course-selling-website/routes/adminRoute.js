const { Router } = require("express");
const adminRouter = Router();

const { z } = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { adminModel, coursesModel } = require("../db.js");
const { adminAuthMiddleware } = require("../middlewares/adminMiddleware.js");

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

adminRouter.put("/create-course", async function (req, res) {
  const adminID = req.userId; //passed down from adminMiddlware

  const courseDetailsRequiredBody = z.object({
    title: z.string().min(3).max(100),
    description: z.string().min(3).max(100),
    imageUrl: z.string().min(3).max(100),
    price: z.number().min(1).max(100000000), //max(100000000) is the actual value ~10cr
    // creatorId: z.string().max(150), //adminId will direcly be added via model
  });

  const courseDetailsParsedBody = courseDetailsRequiredBody.safeParse(req.body);

  if (!courseDetailsParsedBody.success) {
    res.status(403).json({
      message: "Enter correct course details",
      error: courseDetailsParsedBody.error,
    });
    return;
  }

  // courseDetailsParsedBody : {"success":true,"data":{"title":"100xDevs Cohort 1","description":"Complete webdev cohort from zero to one","imageUrl":"https://www.google.com/","price":7,"creatorId":"670a58f8c59a741240918097"}}

  const { title, description, imageUrl, price, creatorId } =
    courseDetailsParsedBody.data;

  console.log(
    `courseDetailsParsedBody : ${JSON.stringify(courseDetailsParsedBody.data)}`
  );

  //adding new course data to the db via the course model.
  let errorThrown = false;
  try {
    await coursesModel.create({
      title,
      description,
      imageUrl,
      price,
      creatorId: adminID,
    });
    console.log(`Course details added to db`);
  } catch (e) {
    errorThrown = true;
    res.json({
      msg: "Error while uploading course details to the db",
      error: e.message,
    });
  }
  if (!errorThrown) {
    res.json({
      msg: "In admin /create-course & course added :)",
    });
  }
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

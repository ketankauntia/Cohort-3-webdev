const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "CHALAAA_JAA";
// const cors = require("cors");
const app = express();
// app.use(cors());
app.use(express.json()); //missed this

let users = [];

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// # Assignment: Creating an auth middleware
// Can you try creating a `middleware` called `auth` that verifies if a user is logged in and ends the request early if the user isn’t logged in?

function authMiddleware(req, res, next) {
  const token = req.headers.token;

  // if token doesn't exist, not logged in;
  // if token is right and user exists, logged in
  // else logged out.

  if (token) {
    const userDetails = jwt.verify(token, JWT_SECRET);

    const findUser = users.find((u) => u.username === userDetails.username);
    if (findUser) {
      //   res.send({
      //     msg: "User is logged in already",
      //   });
      req.username = findUser.username; //passing down the user's username since it will be required.
      next();
    } else {
      res.status(401).send({
        msg: "user is not logged in",
      });
    }
  } else {
    res.send({
      msg: "Not logged in. (token doesn't exist)",
    });
  }

  console.log("Signed up");
  //   next();
}

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const foundUser = users.find((u) => u.username === username);

  if (!foundUser) {
    users.push({
      username,
      password,
    });
    res.json({
      msg: "Signup successfull",
    });
  } else {
    res.status(403).send({
      msg: "User already exists! Signin to continue.",
    });
  }
  console.log(`FOUND USER (signup) : ${username},${password}`);
  console.log(`ALL  USERS (signup) : ${JSON.stringify(users)}`);
});

// && u.password === password
app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //check if credentials match
  const foundUser = users.find(
    (u) => u.username === username && u.password === password
  );

  //if matches then issue token via secret or tell error
  if (foundUser) {
    const token = jwt.sign(
      {
        username: foundUser.username,
      },
      JWT_SECRET
    );
    res.header("token", token);
    res.send({
      token: token,
    });

    foundUser.token = token;
    console.log(`FOUND USER (signin) : ${JSON.stringify(foundUser)}`);
    console.log(`ALL  USERS (signin) : ${JSON.stringify(users)}`);
  } else {
    res.send({
      msg: "Invalid Credentials",
    });
  }
});

app.get("/me", authMiddleware, function (req, res) {
  //
  //commented the next 4 lines coz i created authMiddleware and so there is no use of rechecking the credentials.

  //   const token = req.headers.token;
  //   //verify user jwt token via secret_key
  //   const userDetails = jwt.verify(token, JWT_SECRET);

  //   const username = userDetails.username;
  const user = users.find((u) => u.username === req.username); // very important. (req.username is used since the jwt token is already validated means there is a user. SO, we pass the user's username via the authmiddleware)

  if (user) {
    res.send({ username: req.username });
  } else {
    res.status(403).send({
      msg: "unauthorized",
    });
  }
});

app.get("/auth", authMiddleware, function (req, res) {
  res.send({
    msg: "Passed through auth middleware",
  });
});

app.listen(3000);

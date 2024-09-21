const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "CHALAAA_JAA";

const app = express();
app.use(express.json()); //missed this

let users = [];

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
        username: username,
      },
      JWT_SECRET
    );

    res.send({
      token: token,
    });

    foundUser.token = token;
    console.log(`FOUND USER (signin) : ${JSON.stringify(foundUser)}`);
    console.log(`ALL  USERS (signin) : ${JSON.stringify(users)}`);
  } else {
    res.status(403).send({
      msg: "Invalid username or Password",
    });
  }
});

app.get("/me", function (req, res) {
  const token = req.headers.token;
  //verify user jwt token via secret_key
  const userDetails = jwt.verify(token, JWT_SECRET);

  const username = userDetails.username;
  const user = users.find((u) => u.username === username);

  if (user) {
    res.send({ username: username });
  } else {
    res.status(403).send({
      msg: "unauthorized",
    });
  }
});

app.listen(3000);

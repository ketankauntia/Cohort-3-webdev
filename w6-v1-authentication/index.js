const express = require("express");
const app = express();
app.use(express.json());

// app.get("/", function (req, res) {
//   res.json({ reply: "bye" });
// });

const users = [
  {
    username: "u2",
    password: "p2",
  },
]; //username, password, token

function generateToken() {
  let options = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];

  let token = "";
  for (let i = 0; i < 32; i++) {
    // use a simple function here
    token += options[Math.floor(Math.random() * options.length)];
  }
  return token;
}

app.post("/signup", function (req, res) {
  // if user already exists, dont add to memory
  //   if (users.find((u) => u.username === username)) {
  //     res.json({
  //       msg: "User already exists. Please signin",
  //     });
  //     return;
  //   }
  let username = req.body.username;
  let password = req.body.password;

  users.push({
    username: username,
    password: password,
    // token: req.body.token,
  });

  res.json({
    msg: "signup successful",
  });
});

app.post("/signin", function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  const foundUser = users.find(function (u) {
    if (u.username === username && u.password === password) {
      return true;
    } else {
      return false;
    }
  });

  if (foundUser) {
    const createdToken = generateToken();
    foundUser.token = createdToken;
    res.json({
      token: createdToken,
    });
    console.log(users);
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
});

app.listen(3000);

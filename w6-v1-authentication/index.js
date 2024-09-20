const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomKetanIamOK";
const app = express();
app.use(express.json());

// app.get("/", function (req, res) {
//   res.json({ reply: "bye" });
// });

const users = [
  // {
  //   username: "u2",
  //   password: "p2",
  // },
]; //username, password, token

// function generateToken() {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];

//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     // use a simple function here
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }

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
  console.log(users);
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
    // const token = generateToken();  //previously we used to generate tokens.. now we use jwt and sign them.

    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    ); // encode username using a jwtsecret key which can be used to decrypt it later

    foundUser.token = token;
    res.json({
      token: token,
    });
    console.log(users);
  } else {
    res.status(403).send({
      message: "Invalid username or password",
    });
  }
  console.log(users);
});

app.get("/me", function (req, res) {
  const token = req.headers.token; //jwt
  const decodedInfomation = jwt.verify(token, JWT_SECRET); //{ username : simple@google.com}
  const username = decodedInfomation.username;

  let foundUser = null;

  for (let i = 0; i < users.length; i++) {
    if (users[i].token === token) {
      foundUser = users[i];
    }
  }

  if (foundUser) {
    res.json({
      username: foundUser.username,
      password: foundUser.password,
      token: foundUser.token,
    });
  } else {
    res.json({
      msg: "User not logged in",
    });
  }
});

app.listen(3000);

const express = require("express");
const app = express();

app.use(express.json);

app.get("/", function (req, res) {
  let a = req.body.a;
  let b = req.body.b;
  console.log(a + " " + b);
  res.json({
    answer: a + b,
  });
});

app.listen(3000);

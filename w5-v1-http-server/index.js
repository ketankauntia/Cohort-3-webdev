const express = require("express");
const app = express();

app.get("/add", function (req, res) {
  //   console.log(req.query.a, " ", req.query.b);
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: parseInt(req.query.a) + parseInt(req.query.b),
  });
});

app.get("/multiply", function (req, res) {
  res.json({
    ans: parseInt(req.query.a) * parseInt(req.query.b),
  });
});

app.get("/divide", function (req, res) {
  res.json({
    ans: parseInt(req.query.a) / parseInt(req.query.b),
  });
});

app.get("/subtract", function (req, res) {
  res.json({
    ans: parseInt(req.query.a) - parseInt(req.query.b),
  });
});

app.listen(3000);

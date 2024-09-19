const express = require("express");
const app = express();

// http://localhost:3000/ride1/?age=10

function ageCheckerMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "Rides cannot be ridden!! Age is small!!",
    });
  }
}

app.get("/ride1", ageCheckerMiddleware, function (req, res) {
  res.json({
    msg: "Success in ride 1",
  });
});

app.get("/ride2", ageCheckerMiddleware, function (req, res) {
  res.json({
    msg: "Success in ride 2",
  });
});

app.listen(3000);

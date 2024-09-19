const express = require("express");
const app = express();

// Try these out yourself.

// 1. Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console

function logMiddleware(req, res, next) {
  console.log("Method is : ", req.method);
  console.log("host is : ", req.hostname);
  console.log("Route is : ", req.url);
  console.log(new Date());
  next();
}
app.use(logMiddleware);

app.get("/sum", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);

  res.json({
    ans: a + b,
  });
});

app.get("/multiply", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a * b,
  });
});

app.get("/divide", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;
  res.json({
    ans: a / b,
  });
});

app.get("/subtract", function (req, res) {
  const a = parseInt(req.query.a);
  const b = parseInt(req.query.b);
  res.json({
    ans: a - b,
  });
});

app.listen(3000);

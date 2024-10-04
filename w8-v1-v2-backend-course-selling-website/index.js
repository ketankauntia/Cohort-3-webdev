const express = require("express");
const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.json({
    msg: "Hi there",
  });
});

app.listen(3000);

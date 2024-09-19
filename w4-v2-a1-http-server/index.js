const express = require("express");
const app = express();

//route handler
app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(3000);

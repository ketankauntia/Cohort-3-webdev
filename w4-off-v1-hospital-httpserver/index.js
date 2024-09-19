const express = require("express");
const app = express();

let usersData = [
  {
    name: "Jhon",
    kidneys: [
      {
        healthy: false,
        healthy: true,
      },
    ],
  },
];

// user can check the no of kidney they have and their health
app.get("/", function (req, res) {
  const userKidney = usersData[0].kidneys;
  const kidneyCount = userKidney.length;
  let unhealthyKidney = 0;
  for (let i = 0; i < kidneyCount; i++) {
    if (userKidney.healthy == false) {
      unhealthyKidney++;
    }
  }
  let healthyKidney = kidneyCount - unhealthyKidney;

  res.send({
    kidneyCount,
    unhealthyKidney,
    healthyKidney,
  });
});
// user can add a new kidney
app.post("/", function (req, res) {
  let userKidney = usersData[0].kidneys;
  userKidney.push({
    healthy: true,
  });

  res.send(`Updated User Data : ${JSON.stringify(usersData, null, 2)}`);
  console.log(`Updated User Data : ${JSON.stringify(usersData, null, 2)}`);
});
// replace kidney and make it healthy
app.put("/", function (req, res) {
  res.send("Recieved");
});
// remove a kidney
app.delete("/", function (req, res) {
  res.send("Recieved");
});

app.listen(3000);

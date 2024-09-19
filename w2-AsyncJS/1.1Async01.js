const fs = require("fs");

function read(err, data) {
  console.log(data);
}

fs.readFile("a.txt", "utf-8", read);

fs.readFile("b.txt", "utf-8", read);

console.log("Job Done!");

// Reads the contents of a file
// Trims the extra space from the left and right
// Writes it back to the file

const fs = require("fs");
fs.readFileSync("a.txt", "utf-8", read);

function read(err, data) {
  console.log(data);
  //triming extra space from left and right
  let newdata = data.trim();

  //writing it back to the file
  fs.writeFile(newdata, "utf-8");
}

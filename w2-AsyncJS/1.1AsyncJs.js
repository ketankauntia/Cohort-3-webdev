// const fs = require("fs");

// let contents = fs.readFileSync("a.txt", "utf-8");
// console.log(contents);

// let contentsB = fs.readFileSync("b.txt", "utf-8");
// console.log(contentsB);

const fs = require("fs");
const pdf = require("pdf-parse");

const dataBuffer = fs.readFileSync("dn.pdf");

pdf(dataBuffer)
  .then(function (data) {
    // `data.text` contains the extracted text
    console.log(data.text);
  })
  .catch(function (error) {
    console.error("Error reading PDF:", error.message);
  });

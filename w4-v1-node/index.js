// const fs = require("fs");

// function main(filename) {
//   //read file

//   //    reads the no. of arguments from the command line
//   //   console.log(process.argv[2]);

//   fs.readFile(filename, "utf-8", function (err, data) {
//     //count words
//     let count = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] === " ") {
//         count++;
//       }
//     }
//     console.log(count + 1);
//   });
// }

// // main("a.txt");
// main(process.argv[2]);

// ---------------

const fs = require("fs");
const { Command } = require("commander"); //command is a class coz next line me we create an object of it.
const program = new Command(); // using the new keyword.

program
  .name("counter")
  .description("CLI to do file based tasks")
  .version("0.8.0");

program
  .command("count")
  .description("Count the number of words in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split(" ").length;
        console.log(`There are ${lines} words in ${file}`);
      }
    });
  });

program
  .command("csen")
  .description("Count the number of sentences in a file")
  .argument("<file>", "file to count")
  .action((file) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split("\n").length;
        console.log(`There are ${lines} sentences in ${file}`);
      }
    });
  });

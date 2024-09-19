// # Assignment #2 : Filesystem based todo list. Create a `cli` that lets a user
// 1. Add a todo
// 2. Delete a todo
// 3. Mark a todo as done

const fs = require("fs");
const path = require("path");
const { Command } = require("commander"); //command is a class coz next line me we create an object of it.
const program = new Command(); // using the new keyword.

//connecting the todos.json
const todofilepath = path.join(__dirname, "todos.json");
let todofiledataraw = fs.readFileSync("todofilepath", "utf-8");
let todosfiledata = JSON.parse(todofiledataraw);

// console.log(todofiledata)

program
  .name("TODO")
  .description("CLI for TODO list operations")
  .version("0.1.0");

program
  .command("view")
  .description("View the to-do list")
  .argument("<data>", "file to count")
  .action((file) => {
    // fs.readFile(file, "utf8", (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     const lines = data.split("\n").length;
    //     console.log(`There are ${lines} sentences in ${file}`);
    //   }
    // });
    console.log(todosfiledata);
  });

// program
//   .command("addtodo")
//   .description("Add a note to the to-do list.")
//   .argument("<note>", "to-do note to add")
//   .action((note) => {
//     // console.log(note);
//     //read values of the file and todos.json and add values to it.
//   });
// program.parse();

// C:/Users/KIIT0001/Desktop/cohort3-main/webdev/w4-v1-node/a.txt

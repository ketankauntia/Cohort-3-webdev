let todos = [
  { title: "papaya1" },
  { title: "papaya2" },
  { title: "papaya3" },
  { title: "papaya4" },
];
function addNote() {
  todos.push({ title: document.querySelector("input").value });
  //create a note-div block
  //   let newblock = document.createElement("div");

  // OR
  //   newblock.innerHTML =
  //     "<span>" +
  //     value +
  //     '</span><button onclick="deleteNote()">Delete Node</button>';

  //   //creating its 2 subchild blocks
  //   let spanblock = document.createElement("span");
  //   let btnblock = document.createElement("button");

  //   //adding the 2 child block to the main todo block
  //   newblock.appendChild(spanblock);
  //   newblock.appendChild(btnblock);

  //   //giving value to the child blocks
  //   spanblock.innerHTML = value;
  //   btnblock.innerHTML = "delete note";

  //   //adding the entire block to the body
  //   document.querySelector("body").appendChild(newblock);
  console.log(todos);
  render();
}

function render() {
  document.querySelector(".container").innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];

    // console.log(todo.title);
    const div = document.createElement("div");
    const h1 = document.createElement("h1");
    const btn = document.createElement("button");

    h1.innerHTML = todo.title;
    btn.innerHTML = "delete note";

    div.appendChild(h1);
    div.appendChild(btn);

    document.querySelector(".container").appendChild(div);
  }
}

//create : delete last todo
function deleteLastTodo() {
  todos.splice(todos.length - 1, 1);
  render();
}
// create : delete first todo
function deleteFirstTodo() {
  todos.splice(0, 1);
  render();
}

//create : delete functionality for each todo
function deleteTodo() {
  //
}

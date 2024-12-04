// function n(str: string) {
//   console.log(str);
// }

// n("Raj");

//
//
//
//
// Assignment #2 - Create a React component that takes todos as an input and renders them

// first we create an interface
interface TodoInterface {
  id: number;
  title: string;
  description: string;
}

interface todoInput {
  todo: TodoInterface;
}

//creating a react component and rendering todoblock
// function todoComponent({ todo }: todoInput) {
//   return (
//     <div>
//       <h1> {todo.title} </h1>
//       <h2> {todo.description} </h2>
//     </div>
//   );
// }

// at 1:34:37 quick task

interface User {
  firstName: string;
  lastName: string;
  age: number;
}
//wap that takes an array of users as input, returns legal users

// function isLegal(arr: number[]) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age >= 18) {
//       console.log(arr[i] + " ");
//     }
//   }
// }

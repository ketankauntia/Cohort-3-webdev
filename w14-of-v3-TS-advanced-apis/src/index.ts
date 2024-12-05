// interface User {
//   name: string;
//   age: number;
// }

// function sumOfAge(user1: User, user2: User): number {
//   return user1.age + user2.age;
// }

// console.log(sumOfAge({ name: "pap", age: 2 }, { name: "lol", age: 4 }));

interface User {
  name: string;
  age: number;
  password: string;
  email: string;
  address: string;
}

type userDataPick = Pick<User, "name" | "age" | "email">;

function updateUserData(userDataProp: userDataPick) {
  // db call to update
}

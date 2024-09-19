//
// create a map function that take 2 input. array and transformation function to perform an operation.

const input = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// const output = input.map((i) => {
const output = input.filter((i) => {
  if (i % 2 == 0) {
    return i;
  }
  //   return i * 2;
});

console.log(output);

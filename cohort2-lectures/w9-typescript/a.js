"use strict";
// tsc -b to transcribe .ts file to .js
// node filename.js to run
// function greet(firstName: string = "Raja") {
//   console.log(`Hello ${firstName}`);
// }
// greet();
//
//type inference
// function sum(a: number, b: number): number {
//   return a + b;
// }
// console.log(sum(8, 1));
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isLegal(21));
function after1sec() {
    setTimeout(() => {
        isLegal(20);
    }, 1000);
}
console.log(after1sec());

// logs high after 1 sec
// hello after 3 sec
// hello there after 5 sec

function resolve() {
  console.log("high");
}

function after1sec(resolve) {
  setTimeout(resolve, 1000);
}

let p = new Promise(after1sec);

function resolve1() {
  console.log("hello");
}

function after5sec(resolve1) {
  setTimeout(resolve1, 3000);
}

function callback() {
  setTimeout("Hello there", 5000);
}

p.then(callback);
// p.then(after5sec).then(callback);

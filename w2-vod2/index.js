function random(resolve) {
  //resolve is also a function
  setTimeout(resolve, 3000); //resolve function will be sent as a promise after 3 secs.
}

//whoever writes the promise class passes the argument function.
//this random means : when does the promise resolve
let p = new Promise(random); //supposed to eventually return something

//so we should know when our promise returns something as well
//or
//using the eventual value returned by the promise class
function callback() {
  console.log("Promise succedded");
}

p.then(callback);
// console.log(p);

// -------------------------------

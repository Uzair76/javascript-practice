console.log("hello world");

let x = 19;
console.log(x);
function greet(name) {
  return "Hello " + name + "!";
}
console.log(greet("Kami"));
console.log(greet("Ali")); // 11

//Arrow function
const greet2 = (name) => {
  return "Hello " + name + "!";
};
console.log(greet2("Kami"));

//calback function
function greet3(name, callback) {
  return callback(name);
}
console.log(greet3("Kami", greet2));
console.log(greet3("Ali", greet2)); // 11
console.log(greet3("Ali", greet)); // 11

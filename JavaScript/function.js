// console.log("hello world");

// let x = 19;
// console.log(x);
// function greet(name) {
//   return "Hello " + name + "!";
// }
// console.log(greet("Kami"));
// console.log(greet("Ali")); // 11

// //Arrow function
// const greet2 = (name) => {
//   return "Hello " + name + "!";
// };
// console.log(greet2("Kami"));

// //calback function
// function greet3(name, callback) {
//   return callback(name);
// }
// console.log(greet3("Kami", greet2));
// console.log(greet3("Ali", greet2)); // 11
// console.log(greet3("Ali", greet)); // 11

// // Arrow Function
// var value = function (x, y) {
//   return x * y;
// };
// console.log(value(5, 6)); // 30

// var value2 = (x, y) => x * y;
// console.log(value2(5, 6)); // 30

//Question 1
const checknum = function (number) {
  if (number > 0) {
    return "Positive number";
  } else if (number < 0) {
    return "Negative number";
  } else {
    return "number is equal to zero";
  }
};

console.log(checknum(5));
console.log(checknum(-5));
console.log(checknum(0));

// Question 2
const sunUpToNumber = function (number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum = sum + i;
  }
  console.log(sum);
  return sum;
};
console.log(sunUpToNumber(5));

// Question 3

const evenNumber = function () {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log(i);
    }
  }
};
evenNumber();

//Question 4

const reverseString = function (str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
};

console.log(reverseString("hello world"));
console.log(reverseString("Kami"));

//Question 5
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Question 6
const maxNumber = function (arr) {
  let max = arr[0];
  for (i = 1; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(maxNumber([8, 4, 6, 1, 3])); // 9

// Question 7
const primeNumber = function (num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
console.log(primeNumber(5)); // true
console.log(primeNumber(4)); // false
console.log(primeNumber(1)); // false
console.log(primeNumber(0)); // false
console.log(primeNumber(-5)); // false
console.log(primeNumber(7)); // true

// Question 8

function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev = 0,
    curr = 1;

  for (let i = 2; i <= n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
    console.log(curr);
  }

  return curr;
}
console.log(fibonacci(9)); // 0

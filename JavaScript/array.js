console.log("Hello World");

const array = [1, 2, 3, 4, 5];

const array2 = ["BMW", "Volvo", "Mercedes", "Toyota"];

for (let i = 0; i < array2.length; i++) {
  console.log(array2[i]);
}
array2[0] = "Ford";
console.log("Array index 2: " + array2[0]);
console.log("Array length: " + array2.length);

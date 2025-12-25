console.log("Hello, JavaScript Problems!");

let x = 10;
console.log(x);

// sum of two number 
function sum(a,b){
    return a+b;
}
console.log(sum(2,8));

// convert string to number
let str = "56";
console.log(typeof(str));
let num = parseInt(str);
console.log(typeof(num));

// check even or odd 

function even(n){
    if(n%2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}
console.log(even(3));


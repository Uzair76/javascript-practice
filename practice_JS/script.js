/*
let fname= prompt(" enter name");
let str = "@" + fname + fname.length;
console.log(str);
*/



/*
const markHeight=1.69;
const markMass=78;
const johnHeight=1.76;
const johnMass=92;

const markBMI=markMass/markHeight**2;
const johnBMI=johnMass/johnHeight**2;

// const markHasGreator= markBMI > johnBMI;
if(markBMI > johnBMI){
    console.log('Mark has higher BMI');
}
else if(markBMI < johnBMI){
    console.log('John has higher BMI');
}
else{
    console.log('Mark and John has same BMI');
}

console.log(markBMI,johnBMI);
*/



//String literals 
/*
const firstName='John';
const job='Teacher';
const birthYear=1993;
const year=2000;

// const john= "I'm " + firstName +',a '+(year-birthYear)+' year  old '+job+'!';
// console.log(john);
const john= `I'm ${firstName} ,a ${year-birthYear} year old ${job} !`

console.log(john);
*/

// challenge


// const dolphinsAvg=(97+112+101)/3;
// const koalasAvg=(97+112+101)/3;
// if(dolphinsAvg>koalasAvg && dolphinsAvg>=100){
//     console.log('Dolphin Team wins');
// }else if(dolphinsAvg<koalasAvg && koalasAvg>=100){
//     console.log('Koalas Team wins');
// }else if (koalasAvg<100 || dolphinsAvg<100){
//     console.log('Averrage score is less then 100');
// }else if (koalasAvg>100 || dolphinsAvg>100){
//     console.log('both have same Average scores');
// }

   

// console.log(dolphinsAvg, koalasAvg);


//functions
// function add (one,two){
//     return one+two;
// }

// function fruits(apple,banana){
//     console.log(add(7,2));
//     return `i have ${apple} apple and ${banana} bananas`;
// }
// console.log(fruits(6,9));

// const arrowFunction= functio =>a+b;
// console.log(arrowFunction(8,1));

// const array=[1,7,8,5];
// [one,,two]=array;
// console.log(one,two);
// let temp=one;
// one=two;
// two=temp;
// console.log(one,two);


function sum(a,b){
    return a+b;
}
let x= sum(6,6);
console.log(x);


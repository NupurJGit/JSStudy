/*
JS has Math library in it by default. So, all the functions of Math library are readily available in JS by using the Math. as it's prefix.


*/


let num = new Number(100);

// console.log(num);
// console.log(num+1);



//**************Math***************

//Math.random(); -> gives any number between  0 & 1. The number will be with decimal but will ALWAYS be between 0 & 1.
console.log(Math.random());

console.log(Math.floor(Math.random())); //->  Math.floor will give the lower value in decimal no. -> will always give 0 in current line execution
console.log(Math.ceil(Math.random())); //->  Math.floor will give the higher value in decimal no. -> will always give 1 in current line execution


//So the formula to get a positive value, greater than 0 & always within a specific range becomes as below

const minval = 10;
const maxval = 20;

console.log(Math.floor((Math.random() * (maxval - minval + 1)+minval)));


/* as mentioned the variables minval & maxval above, define the range of numbers within which you want a random number

then apply above formula to get a positive random  number within the given range
*/
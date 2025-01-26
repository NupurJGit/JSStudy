//IIFE - Immediately invoked function expression

//when a function needs to execute immediately after defined, then it's written as an IIFE.
//IIFE is also known as self executing anonymous function
//an IIFE as the name suggests is a function which excecutes immediately after invoked.

/* there are 2 types of IDDE
1. Named IFFE
2. Unnamed IFFE
*/

"use strict";

//Named IIFE
(function namedIIFE() {
    console.log("This is Named IIFE");
})();


//Unnamed IIFE
(() => {
    console.log(`This is unnamed IIFE`);
})();


//IIFE with parameters

((name) => {
console.log(`this is IIFE with Param ${name}`);
})("nupur");
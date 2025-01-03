"use strict";

let personName = "Nupur";
let age = 29;
let IsAgeLess = true;

console.table([typeof personName, typeof age, typeof IsAgeLess]);


// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique
let nullVar = null;
let undefinedVar;
console.log(nullVar + " has type " + typeof nullVar)

console.log(undefinedVar + " has type " + typeof undefinedVar)

/* the type of undefined variable is undefined BUT the type of null is OBJECT*/

// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object

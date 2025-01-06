// Javascript is a dynamically typed language.

//Primitive
//7 types - String, Number, Boolean, Undefined, Null, Symbol, BigInt

let symbolEx = Symbol("14587");

let symbolEx2 = Symbol("14587");

console.log(symbolEx == symbolEx2);


//Non Primitive -> also called Reference type -> meaning their reference is allocated in memory
// Array, Objects, Functions

let heros = ["Shaktiman", "G-Man", "Bheem"];

let obj1 = {
    name:"abcd",
    age:29
}

let fun1 = function(){
    console.log("Hello world");
}

console.log(heros +" is of type "+typeof(heros));
console.log(obj1 +" is of type "+typeof(obj1));
console.log(fun1  +" is of type "+typeof(fun1));



// Javascript is a dynamically typed language.

//Primitive
//7 types - String, Number, Boolean, Undefined, Null, Symbo  l, BigInt

let symbolEx = Symbol("14587");

let symbolEx2 = Symbol("14587");

console.log(symbolEx == symbolEx2); // this returns false because each symbol will give a different unique value. So the equal comparison will always return false.


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


// the typeof ran on null will return Object.

//Return type of variables in JavaScript
//1) Primitive Datatypes
  //     Number => number
    //   String  => string
      // Boolean  => boolean
      // null  => object
      // undefined  =>  undefined
      // Symbol  =>  symbol
      // BigInt  =>  bigint

//2) Non-primitive Datatypes
  //     Arrays  =>  object
   //    Function  =>  function
   //    Object  =>  object


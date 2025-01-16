"use strict";

let myArr = [0,1,2,3,4,5];

console.log("Original " + myArr);

myArr.push(6); // Push function adds the value at the end of array.
console.log("Post Push " + myArr);

myArr.pop(); // Pop function removes the value from the end of Array
console.log("Post Pop " + myArr);


myArr.unshift(7); //Unshift function adds the value at the Beginning of Array. This increases load on computer in case of big arrays as the new value addition causes all other values of Array to shift.
console.log("Post Unshift " + myArr);

myArr.shift(); //Shift function removes the value from the beginning of Array. This increases load on computer in case of big arrays as the new value addition causes all other values of Array to shift.
console.log("Post Unshift " + myArr);


let newArray = [0,1,2,3,4,5,6];
console.log("Original Array " + newArray);

let newArray1 = newArray.slice(2,5); 
/* the slice function takes start & end index as it's parameters and removes the element from the Array
 BUT DOES NOT AFFECT THE ORIGINAL ARRAY.
The end parameter passed to the slice function is the index number & on actual slicing operation happens till the 1 index before that.
Meaning if 5 is given as the end index, then the slicing will happen till the 4th Indexed element in the array.
*/
console.log("Sliced Array "+newArray1);
console.log("Original Array post slice " + newArray);



let newArray2 = newArray.splice(2,2);
/*
The splice function takes the first parameter as start index & last parameter as the count of elements to be removed from the Array.
The splice function AFFECTS the original array while removing the elements from the array.
*/
console.log("Spliced Array "+newArray2);
console.log("Original Array post splice " + newArray);

console.log("******************Advanced Operations on Arrays********************");
let marvel_sh = ["iroman", "thor", "spiderman"]
let dc_sh = ["aquaman","flash","superman"]
let lady_sh = ["black widow", "wonder woman"]

//marvel_sh.push(dc_sh,lady_sh)
/*push function adds another array to original array in the form of array only. So this is not a recommended way to combine multiple arrays*/
//console.log(marvel_sh);

//console.log(marvel_sh.concat(dc_sh,lady_sh));
/*the concat function combines multiple arrays to single array. It is a recommended way to combine multiple arrays.*/

console.log(...marvel_sh,...dc_sh,...lady_sh); //... is a spread operator which is useful to combine multiple arrays. It is a simple & recommended way to combine multiple arrays 

let arr1 = [1,2,3,[4,5,6],7,[8,9],10];
console.log(arr1.flat(Infinity)); //converts multi level array like above to a single dimensional array. The parameter provided is the level of arrays to be converted to flat array. infinity is also acceptable parameter if no. of levels are not known.

console.log(Array.isArray("Nupur")); // checkes if provided parameter is an array and returns true or false
console.log(Array.from("Nupur")); //converts given string to array
console.log(Array.from({name:"Nupur"})); //returns null Array because it can't convert object into an array. need to specify if keys or values of object should be converted to array

let a1 = 100;
let a2 = 200;
let a3 = 300;

console.log(Array.of(a1, a2, a3)); // .of() combines multiple elements & returns them as an array


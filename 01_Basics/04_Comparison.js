// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

/*This way of comparison is not usable anywhere any real time application. Although, for learning purpose
the equality check i.e. == works differently in case of Null and the comparison operators work differently

whereas

in case of undefined, the equality check and comparison operators, both work the same way.

*/
// console.log("2" > 1);
// console.log("02" > 1);
console.log("Printing null comparison & equality checks")
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log("Printing undefined comparison & equality checks")
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 
console.log("Printing output of === operator which compares value AND types of both sides")
console.log("2" === 2);
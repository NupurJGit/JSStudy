let dt = new Date();

//console.log(dt);


let dt1 = new Date(2025,5,9);

// console.log(dt1.toDateString());
// console.log(dt1.toISOString());
// console.log(dt1.toLocaleDateString());
// console.log(dt1.toLocaleString());
// console.log(dt1.toLocaleTimeString());
// console.log(dt1.toTimeString());
// console.log(dt1.toUTCString());
// console.log(dt1.toString());

let dt2 = new Date();
console.log(dt2.toLocaleString('default',{
    weekday : "long"
}))

console.log(Date.now()); //=> returns the value in milliseconds for the time that lapsed since midnight January 1st ,1970

//Number conversion
let score = "333";
console.log(score + " is of type" + typeof score);

let convertedNum = Number(score);
console.log("Post conversion" + convertedNum + "is of type" + typeof convertedNum);

console.table([Number("33ab"),Number(null),Number(true),Number(false), Number(undefined)])

/*
The above way any type of variable can ber converted to number using Number(). Below are the values obtained for different types of data when converted with Number()

string => NAN => Ex- Number("33abc")
undefined => NAN => Ex- Number(undefined)
bool => true -> 1, false -> 0 => Ex-  Number(true)/Number(false)
null => 0 => Ex- Number(null) 
*/

//Boolean conversion
let isLoggedIn = 1;
console.log(isLoggedIn + " is of type" + typeof isLoggedIn);

let boolIsLoggedIn = Boolean(isLoggedIn);
console.log("Post conversion " + boolIsLoggedIn + " is of type " + typeof boolIsLoggedIn);

console.table([Boolean(null),Boolean("abc"),Boolean(undefined),Boolean("false"),Boolean("")]);

/*
The above way any type of variable can be converted to Boolean using Boolean(). Below are the values obtained for different types of data when converted with Boolean()

string => true => Ex- Boolean("abc"),Boolean("false")
Empty string => false => Ex- Boolean("")
undefined => false => Ex- Boolean(undefined)
null => false => Ex- Boolean(null) 
*/


//string conversion
let temperature = 40;
console.log(temperature + " is of type " + typeof temperature);

let tempInString = String(temperature);
console.log("Post conversion "+tempInString + " is of type " + typeof tempInString);

console.table([String(null),String(789),String(undefined),String(false),String(true)]);

/*
The above way any type of variable can be converted to String using String(). Below are the values obtained for different types of data when converted with String()

Number, null, undefined, Blank space => All convert to a string value
*/


console.log(String( ));
console.log(Number( ));
console.log(Boolean( ));
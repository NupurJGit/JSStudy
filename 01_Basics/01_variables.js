const accountId = 144852;
let accountEmail = "abcder@gmail.com";
var accountPassword = "7896";
accountCity = "Banglore"; //----> this is NOT RECOMMENDED syntax to define a variable. Variable should ALWAYS be defined with 'let' OR 'var' keyword

// accountId = 2;
/*
  this is not allowed as accountId is constant
*/
console.table([accountId, accountEmail,accountPassword,accountCity])

let accountState;

accountEmail = "xyzeriowjt@yopmail.com"
accountPassword = "iuhfw";
accountCity = "Nagpur";

console.table([accountId, accountEmail,accountPassword,accountCity,accountState])

// After cloning git

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
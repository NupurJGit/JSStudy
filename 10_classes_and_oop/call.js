function SetUserName(username){
    
    this.username = username
    console.log(`This is called & returning username = ${username}`);
    
}

function createUser1(username, email, password){
    SetUserName.call(this,username) 
// when another function is called within a function & the inner funtion is supposed to set some value to variable with out without some complex operations
// then  you need to use the syntax like above i.e. functionName.call(this,functionParameter)
// this way once th inner funtion executes, it passes all it's variable's values to the "this" parameter passed in the function call
// so that the set variables are not lost after inner function's exection & execution context are completed from global execution context.

    this.email = email
    this.password = password
}

function createUser2(username, email, password){
    SetUserName(username) 
    this.email = email
    this.password = password
}
let chai = new createUser1("Nupur","nupur@google.com", "Cert@25");
console.log(chai); 
// output = createUser {
//     username: 'Nupur',
//     email: 'nupur@google.com',
//     password: 'Cert@25'
//   }

let callwithoutThisParam = new createUser2("ABC","abc@google.com", "Yahoo@25");
console.log(callwithoutThisParam);
//output = createUser { email: 'abc@google.com', password: 'Yahoo@25' }
// here the output is NOT returning the "username" because the function createUser2() is NOT calling the function SetUserName() with .call format as shown on line no #9
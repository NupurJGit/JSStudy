let user={
    username:"nupur",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username},  welcome to website`);
        console.log(this);
        
    }
}


// user.welcomeMessage()
// user.username = "Pillu";
// user.welcomeMessage()
//console.log(this); 
/* it will print {}  inside node because here the global object is an empty object. 
Whereas in browser it will return a window object because window object is the global object in browser
 and it is current context also there.*/


 function One(){
    console.log(this);//this will return an object and NOT return empty object
 }

 One()

 function two()
 {
    let username = "Nupur";
    console.log(this.username); //it will print undefined because this can only be used inside object and NOT function in this way
 }

 two()

 let three = function()
 {
    let username = "Nupur";
    console.log(this.username); //it will print undefined because this can only be used inside object and NOT function in this way
 }

 three()



 let chai = () => {
    let username = "Nupur";
    console.log(this.username); //it will print undefined because this can only be used inside object and NOT function in this way
console.log(this);


 }

 chai()

//Basic arrow function is as follows
 let addTwo = (num1, num2) => {
    return num1 + num2;
 }

 console.log(addTwo(1,2));


 //Implicit return arrow function is as below

 let addThree = (num1, num2, num3) => num1 + num2 + num3

 //OR

 let addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)

 // both the syntax mentioned above are valid. i.e. the implicit return function's body 
 // can be kept open or wrapped in () but it CANNOT be wrapped in {}
 // if {} is used then return keyword is MANDATORY to return a value in Arrow functions.
 console.log(addThree(1,2,3));
 console.log(addFour(1,2,3,4,));

 //let retObject = () => {userAge : 29}; 
 // the code on line #78 will give output UNDEFINED because that's not how you return an object.
 
 let retObject = () => ({userAge : 29});
 // to return an object from arrow function, it's important to wrap it in () like line #81.
 console.log(retObject());
 
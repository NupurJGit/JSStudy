let obj1 = {
    name:"Nupur",
    Age:29,
    company : "CTS",

    userdetails : function(){
        //console.log(`Welcome ${this.name}`);        
        console.log(this);
        
    }
}
//console.log(obj1.name);

//console.log(obj1.userdetails());
//console.log(this);



function getuserdetails (name,Age,company){
    this.Name = name;
    this.Age = Age;
    this.Company = company;
    //return this;
}
//as you use "new"  keyword, 
// 1. it creates new object,
// 2. calls Constructor function
// 3. it inject all argunments throguh "this" keyword
// 4. "this" returns the output of the function
//**********//
//let userOne = getuserdetails("nupurJ",29,"CTSF"); 
//console.log(userOne.constructor);
//**********//
// if "new" keyword is NOT used for creating the instance, 
// -the instance CANNOT access other properties like .constructor of this instance.
// So it is crucial to use new keyword for creating the instance.
let userTwo = new getuserdetails("Amogh",30,"ABB");

console.log(userTwo.constructor);
let userThree = new getuserdetails("Ana",55,"Persistent");
console.log(userThree instanceof getuserdetails);
console.log(getuserdetails instanceof Object);

console.log(getuserdetails.prototype instanceof Object);

class User3{
    constructor(username){
        this.username = username
    }

    static printUserName (name){
        console.log(`the name from static method is ${name}`);
        
    }
}

class Teacher extends User3{
    constructor(username, email,password){
        super(username); // here this super method is working similar to the  SetUserName.call(this,username)  in call.js file
        this.email = email
        this.password = password
    }

}

let teach2 = new Teacher("Nupur","abcd3456@yopmail.com","xyz");

//teach2.printUserName() // this line will give an error because printUserName is a static method

let userA = new User3("hahaha");
//userA.printUserName()// this line will give an error because printUserName is a static method

User3.printUserName("ahhwiuvr"); // this line will give output as the username from static method is ahhwiuvr
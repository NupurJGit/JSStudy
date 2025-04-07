class User2{
    constructor(username){
        this.username = username
    }
}

class Teacher extends User2{
    constructor(username, email,password){
        super(username); // here this super method is working similar to the  SetUserName.call(this,username)  in call.js file
        this.email = email
        this.password = password
    }

    printUsername(){
        return this.username
    }
}

let teach1 = new Teacher("teacher1", "teacher1@yopmail.com", "teachTeach");

console.log(teach1.printUsername());

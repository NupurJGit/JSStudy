class User{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}ABCDabcd`;
    }
}

let chai = new User("chai","chai@gmail.com","Test");

console.log(chai.encryptPassword());


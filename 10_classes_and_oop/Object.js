function multiplyby4(num){
    return num *4;
}

multiplyby4.power = 3;

console.log(multiplyby4.power);
console.log(multiplyby4(5));
console.log(multiplyby4.prototype);


function createUser(username, price){
    this.username = username
    this.price = price
}

createUser.prototype.increment = function(price){
    return ++this.price
}

createUser.prototype.printMe = function(price){
    console.log(`Price is ${this.price}`)
}
let chai = new createUser("chai",10);
let tea = new createUser("tea",25);

console.log(chai.username);

chai.increment();

chai.printMe()

tea.printMe() 
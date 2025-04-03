
let myhero = ["thor","spiderman"] ;

let heropower = {
    thor:"hammer",
    spiderman:"sling",

    getspiderpower : function(){
        console.log(`Spidt oiwer is ${this.spiderman}`);
    }

}

Object.prototype.Nupur = function(){
    console.log(`Nupur is present in all objects cox it's injected through the main object prototype directly.`);
}


myhero.Nupur() //here myhero is an array which is also able to access Nupur() which was injected to the prototype of Object. 
// Because Arry/String/function everything is object in javascript at the base level
heropower.Nupur(); // here heropower is an object & it would definitely access Nupur() because Nupur() was inject to prototype of object only

let myName = "stringlengthcalculator  ";

String.prototype.calculateStringOriginalLength = function(){
    console.log(this); //would print the contextual refence that it has received.
    console.log(this.trim().length); //would print the actual length of string by removing all preceeding and succeeding spaces.
}

myName.calculateStringOriginalLength();
"Nupur A Paranjpe".calculateStringOriginalLength();

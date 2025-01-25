function One(){
let username = "Nupur";

function two(){
    let websitename = "youtube";
    console.log(username);
    
}
//console.log(websitename);

//two()

}

//One()

if(true){
    const username = "hitesh";

    if(username === "hitesh"){
        let websitename = "youtube";
        console.log(username + websitename);
    }
    //console.log(websitename);
}

//console.log(username);


/************interesting*******************/

console.log(addOne(6)); // this will also work same as line no. 38 because it's  a simple function

function addOne(num){
    return num + 1
}

//console.log(addOne(6))

//console.log(addTwo(7)); // this will NOT work same as line no. 46 because it's  an expression

let addTwo = function(num){
    return num + 2;
}

console.log(addTwo(7));
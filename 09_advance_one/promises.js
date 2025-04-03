let promiseOne = new Promise(function(resolve,reject){ //here on all the callbacks can also be done with arrow functions. It's NOT mandatory to use a regular function.
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");        
        resolve() 
        // calling the resolve() like this is actually connecting the promise and then(). 
        // So, if the code inside then() needs to be executed, then resolve() MUST be called like it is in this line.
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
    },1000)
}).then(function(){
    console.log('Async two resolved');
})

let promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"nupurjoshi@gmail.com"}) // in this resolve() we are passing the object with {} BUT we CAN ALSO pass any other form of parameters 
        // like Array or string or any other type of data
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

let promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Nupur", password:"abcd"})
        }
        else{
            reject("Error: Something went wrong")
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((data) =>{
    console.log(data)
})
.catch(function(error){
    console.log(error);
}).finally(function(){
    console.log("Finally the promise is either resolved or rejected.");
})

let promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Javascript", password:"123"})
        }
        else{
            reject("Error: JS went wrong")
        }
    },1000)
})

async function consumePromiseFive() {
    try{
        let response = await promiseFive;
        console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         let response = await fetch("https://api.github.com/users/hiteshchoudhary")
//         //console.log(response);
        
//         let data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// getAllUsers()

fetch("https://api.github.com/users/hiteshchoudhary").then((response) => {
    return response.json()
}).then((data) => { 
    console.log(data);
})
.catch((error)=>{console.log(error);
})
let randonNumber = parseInt(Math.random() * 100 + 1);


let submit =  document.querySelector("#subt");
let userInput = document.querySelector("#guessField");
let guessSlot = document.querySelector(".guesses");
let remaining = document.querySelector(".lastResult");
let loworhi = document.querySelector(".lowOrHi");
let startOver = document.querySelector(".resultParas");

let p = document.createElement("p")

let prevGuess = new Array();
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        let guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess < 1){
        alert('Please enter a number bigger than 1')
    }else if( guess > 100){
        alert('Please enter a number smaller than 100')
    }else{
        if(numGuess > 10) {
            prevGuess.push(guess)
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randonNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }

    }

}

function checkGuess(guess){
    if(guess === randonNumber){
        displayMessage(`You guessed it right`)
        endGame()
    } else if(guess < randonNumber){
        displayMessage(`Number is tooo low`)
    }else if(guess > randonNumber){
        displayMessage(`Number is tooo high`)
    }
}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++;
    remaining.innerHTML = `${remaining.value - numGuess}`
}

function displayMessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
 let newGameButton = document.querySelector("#newGame")
 newGameButton.addEventListener('click',function(e){
    randonNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${remaining.value - numGuess}`
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame = true;
 })
}

function endGame(){
userInput.value = ''
userInput.setAttribute('disabled','')
p.classList.add('button')
p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
startOver.appendChild(p)
playGame = false;
newGame()
}
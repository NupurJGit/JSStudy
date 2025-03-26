
let randomColor = () => {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for(let i=0; i<6;i++)
    {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

//console.log(randomColor());

let intervalId;

let startColoring = () => {
    if(!intervalId){
        intervalId = setInterval(changeBGColor,1500);
    }

   function changeBGColor () {
        document.body.style.backgroundColor = randomColor();
    }
}

let stopColoring = () => {
    clearInterval(intervalId);
    intervalId = null;
}

document.getElementById("start").addEventListener("click",startColoring)
document.getElementById("stop").addEventListener("click",stopColoring)
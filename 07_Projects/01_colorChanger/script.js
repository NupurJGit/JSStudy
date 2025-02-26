let buttons = document.querySelectorAll('.button');

let bdy = document.querySelector('body');

buttons.forEach((button) => {
    //console.log(button);
    button.addEventListener('click', function(e){
        //console.log(e);
        //console.log(e.target);
        switch(e.target.id) {
            case "grey":
                bdy.style.backgroundColor = e.target.id;
            case "white":
                bdy.style.backgroundColor = e.target.id;
            case "blue":
                bdy.style.backgroundColor = e.target.id;
            case "yellow":
                bdy.style.backgroundColor = e.target.id;
            case "purple":
                bdy.style.backgroundColor = e.target.id;
        }
    })
});
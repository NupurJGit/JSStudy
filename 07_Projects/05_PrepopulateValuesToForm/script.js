(function(){

    let nonregvaluesele = document.querySelector("#nonregisteredvalues");    
    let fname = nonregvaluesele.getAttribute("data-fname");
    let lname = nonregvaluesele.getAttribute("data-lname");
    let email = nonregvaluesele.getAttribute("data-email");
    
    document.getElementById("fname").value = fname;
    document.getElementById("lname").value = lname;
    document.getElementById("email").value = email;    
})();

let subbutton = document.querySelector(".submitbutton");
subbutton.addEventListener('click',(e) => {
    console.log(e.target);
    
})
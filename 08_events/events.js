// using onclick event like below is also an okay approach except onclick gives a very limited options.
// document.getElementById("owl").onclick = function(){
//     alert("owl");
// }

//always use adeventlistener as below because eventlistener gives an ability to use propogations along with the event


// document.getElementById("images").addEventListener("click", function(){
//     console.log("clicked inside the ul");
// },false);

// document.getElementById("owl").addEventListener("click", function(e){
//     e.stopPropagation();
//     console.log("clicked on Image");
// },false);

document.getElementById("google").addEventListener('click',function(e){
    console.log("google clicked");
    e.preventDefault();
    //e.stopPropagation();
})

document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.parentNode);
    console.log(e.target.tagName);    
    if(e.target.tagName === 'IMG'){
        let removeit = e.target.parentNode;
        removeit.remove();
    }    
},false)
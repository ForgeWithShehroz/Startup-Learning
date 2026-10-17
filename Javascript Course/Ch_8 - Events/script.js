let btn = document.querySelector("#btn");

btn.onclick = () =>{
    console.log("Button was clicked!");
    let a = 25;
    a++;
    console.log(25);
    
}  
 
let div = document.querySelector("#box");
// div.onmouseover = (e) =>{
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
    
// }  // where e is an object that prints the event is occured on which property


/* Using the eventListener that are used to add mutlitple functions of multiple properties at the same time */
div.addEventListener("click", () =>{
    console.log("EventListener is Working! = Handler1");

})

div.addEventListener('click', () =>{
    div.style.fontSize = "355px";
    console.log("Handler2");
    
})

const Handler3 = () =>{
    console.log("This is the third handler that I'm Trying to remove and it can only be removed from the code if and if only if the removeEventLinstener has the same callback")
}

div.addEventListener('click', Handler3)


// removing the handler 3 function

div.removeEventListener('click', Handler3)
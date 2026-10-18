let button = document.querySelector("#btn")

button.addEventListener("click", ()=>{
    alert("Button was clicked")
})

document.addEventListener("keydown", (e)=>{
    console.log(e, e.key, e.keyCode);
    console.log(e.key);
    console.log(e.keyCode);
    
})
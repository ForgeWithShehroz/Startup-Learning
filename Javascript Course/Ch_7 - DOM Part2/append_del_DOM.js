// First we have to create an element and then can be appended
let newBtn = document.createElement("button");
newBtn.innerText = "Click me!";
newBtn.style.backgroundColor = "blue";
newBtn.style.color = "white";
console.log(newBtn);

let div = document.querySelector(".box");
div.append(newBtn);

let p = document.querySelector("p");
p.remove()
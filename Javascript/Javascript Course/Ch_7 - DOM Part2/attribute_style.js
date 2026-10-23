// Accessing attributes and setting the attributes of the elements
let div = document.querySelector("div")
console.log(div)

let id = div.getAttribute("id")
console.log(id)

let p = document.querySelector("p")
console.log(p.setAttribute("class", "theClass"))
console.log(p.getAttribute("class"))

// Accessing the styles given to an element and changing it
// let div = document.querySelector("div")
div = document.querySelector(".box")
console.log(div.style) // or console.dir(div.style)
div.style.fontSize = '34px'
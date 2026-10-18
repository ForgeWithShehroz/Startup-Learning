console.log(document.querySelector(".container").innerHTML); // prints the inner html means tag elements
console.log(document.querySelector(".container").outerHTML); // prints inner as well as html of itself
console.log(document.querySelector(".container").innerText); // prints its inner text that might be anything without tags
console.log(document.querySelector(".container").tagName); // prints its tagname such as tagname of <span> is SPAN only applicable for elements
console.log(document.querySelector(".container").nodeName); // prints its tagName also applicable for other nodes except elements like comments etc.

console.log(document.querySelector(".container").textContent) // it prints the text even if its visibility is hidden 

// document.querySelector(".container").hidden = true  // it hides the element

console.log(document.querySelector(".box").innerHTML = "Shehroz") // changes the inner html to given text

/* Attributes methods can be applied for some of the elements */
e = document.querySelector(".box")

console.log(e.hasAttribute("style"));
console.log(e.getAttribute("style"));
console.log(e.setAttribute("style", "display:inline"));
console.log(e.attributes);
console.log(e.removeAttribute("style"));


// document.designMode = "on"; // we can edit any of the website of the world likegoogle , microsoft

// console.log(e.dataset)  // we can access additional information given to the element within tag


/* Inserting the Elements in html */
// let div = document.createElement("div")
// div.innerHTML = "I am created by <b>Shehroz</b>"
// div.setAttribute("class", "created")
// document.querySelector(".container").append(div)  // it appends within the element but at the end of the element
// document.querySelector(".container").prepend(div)  // it appends within the element but at the start of the element
// document.querySelector(".container").before(div)  // it appends element before the desired element 
// document.querySelector(".container").after(div)  // it appends element after the desired element

let cont = document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin", "<b>Hey I am inserted html using insertAdjacentHtml</b>")
console.log(cont.classList)
console.log(cont.className)

cont.classList.add("hotpink") // it adds a class in the class attributes value
// cont.classList.add("hotpink")  // we can add a class only one time 
cont.classList.remove("sci") // it removes a class from the class attributes value

cont.classList.toggle("spy")  // removes if it is present and add if it is not present in the class
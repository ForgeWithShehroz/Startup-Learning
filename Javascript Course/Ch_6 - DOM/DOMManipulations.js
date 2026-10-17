/* DOM manipulation the biggest feature of using DOM. HTML Collection is similiar to array but not an array
    Selecting Elements:
*/

let idVal = document.getElementById("heading"); // accessing by id and note they return the value we have to print that value
console.dir(idVal); // console.log(idVal); 

let classVals = document.getElementsByClassName("red"); // Slecting Elements by Classes
console.dir(classVals);

let tagNameVal = document.getElementsByTagName("p"); // Selecting Elements by tagName
console.dir(tagNameVal);


// The BEST method to select elements by querySelector 
let firstEl = document.querySelector("p") // Selecting first Element by the tagName
console.dir(firstEl)
let allEls = document.querySelector("p") // Selecting all the elements (nodeList) of the same tagNames
console.dir(allEls)

let idFirstEl = document.querySelector("#heading") // Selecting all the elements by the first idName
console.dir(idFirstEl)
let idAllEl = document.querySelector("#heading") // Selecting all the elements (nodeList) if the same idNames
console.dir(idAllEl)

let classFirstEL = document.querySelector(".red") // Selecting all the elements by the first className
console.dir(classFirstEL)
let classAllEl = document.querySelector(".red") // Selecting all the elements (nodeList) if the same classNames
console.dir(classAllEl)

// Accessing Childs
console.dir(document.getElementById("heading").children)

/* Properties of the Elements */

// Finding the tagName
console.log(firstEl.tagName) // returns the tagName as its P
console.log(allEls.tagName)  // also its P
console.log(idFirstEl.tagName); // H1
console.log(classFirstEL.tagName); // H2 // only gives the first classed Element tagName


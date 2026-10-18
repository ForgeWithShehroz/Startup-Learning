console.log("Hello World");


console.log(document.body.childNodes)
console.log(document.body.childNodes[1].firstChild)
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes[1].childNodes)


// but we want to access the element only not the first or last childs only that means not the text node

console.log(document.body.firstElementChild);
console.log(document.body.lastElementChild);

document.body.childNodes[1].lastElementChild.style.backgroundColor = "hotpink"

console.log(document.body.childNodes[1].lastElementChild.parentElement);


// console.log(document.body.children);
console.log(document.body.firstElementChild.children[2].nextElementSibling);
console.log(document.body.firstElementChild.children[2].previousSibling);


console.log(document.body.children[1].rows);  // etc.
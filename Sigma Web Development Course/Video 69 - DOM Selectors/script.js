let boxes = document.getElementsByClassName("box")
console.log(boxes);

boxes[2].style.backgroundColor = "red"
// document.getElementById("greenbox").style.backgroundColor = "green"

document.querySelector("#greenbox").style.backgroundColor = "green"


console.log(document.querySelectorAll(".box")); // it returns a node list which can't be given css properties we have to take a for loop for it

document.querySelectorAll(".box").forEach((element,) => {
    console.log(element);
    element.style.backgroundColor = "peru"
});

document.getElementsByTagName("div")

console.log(document.getElementsByTagName("div")[2].matches("#greenbox"))

console.log(document.getElementsByTagName("div")[4].closest(".container"));

document.querySelector(".container").contains(document.querySelector("#box"));
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

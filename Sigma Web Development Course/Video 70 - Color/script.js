// function random() {
// num1 = Math.random()
// num2 = Math.random()
// num3 = Math.random()
// num4 = Math.random()
// num5 = Math.random()
// num6 = Math.random()
// num7 = Math.random()
// num8 = Math.random()
// if (num1 < 0.312) {
//     document.querySelector("#box1").style.backgroundColor = "red"
//     document.querySelector("#box1").style.color = "cadetblue"
// } else if (num1 >= 0.312 && num2 < 0.455) {
//     document.querySelector("#box1").style.backgroundColor = "green"
//     document.querySelector("#box1").style.color = "grey"
// } else if (num5 >= 0.112 && num5 <= 0.643) {
//     document.querySelector("#box1").style.backgroundColor = "peru"
//     document.querySelector("#box1").style.color = "golden"
// } else if (num8 <= 0.712 || num6 <= 0.443) {
//     document.querySelector("#box1").style.backgroundColor = "hotpink"
//     document.querySelector("#box1").style.color = "burlywood"
// } else if (num3 < 0.312 || num4 > 0.142) {
//     document.querySelector("#box1").style.backgroundColor = "silver"
//     document.querySelector("#box1").style.color = "crimson"
// } else {
//     document.querySelector("#box5").style.backgroundColor = "blue"
//     document.querySelector("#box1").style.color = "aqua"
// }
// if (num1 < 0.212) {
//     document.querySelector("#box2").style.backgroundColor = "burlywood"
//     document.querySelector("#box1").style.color = "#198167"
// } else if (num1 >= 0.312 && num2 < 0.455) {
//     document.querySelector("#box2").style.backgroundColor = "cadetblue"
//     document.querySelector("#box1").style.color = "golden"
// } else if (num5 >= 0.112 && num5 <= 0.643) {
//     document.querySelector("#box2").style.backgroundColor = "crimson"
//     document.querySelector("#box1").style.color = "#000000"
// } else if (num8 <= 0.712 || num6 <= 0.443) {
//     document.querySelector("#box2").style.backgroundColor = "cyan"
//     document.querySelector("#box1").style.color = "purple"
// } else if (num3 < 0.312 || num4 > 0.142) {
//     document.querySelector("#box2").style.backgroundColor = "aqua"
//     document.querySelector("#box1").style.color = "#053b42"
// } else {
//     document.querySelector("#box5").style.backgroundColor = "palered"
//     document.querySelector("#box1").style.color = "yellow"
// }
// if (num1 > 0.722) {
//     document.querySelector("#box3").style.backgroundColor = "rgb(89, 56, 119)"
//     document.querySelector("#box1").style.color = "red"
// } else if (num1 >= 0.312 && num2 < 0.455) {
//     document.querySelector("#box3").style.backgroundColor = "grey"
//     document.querySelector("#box1").style.color = "green"
// } else if (num5 >= 0.112 && num5 <= 0.643) {
//     document.querySelector("#box3").style.backgroundColor = "pink"
//     document.querySelector("#box1").style.color = "hotpink"
// } else if (num8 <= 0.712 || num6 <= 0.443) {
//     document.querySelector("#box3").style.backgroundColor = "blue"
//     document.querySelector("#box1").style.color = "silver"
// } else if (num3 < 0.312 || num4 > 0.142) {
//     document.querySelector("#box3").style.backgroundColor = "yellow"
//     document.querySelector("#box1").style.color = "blue"
// } else {
//     document.querySelector("#box5").style.backgroundColor = "springgreen"
//     document.querySelector("#box1").style.color = "peru"
// }
// if (num1 < 0.199) {
//     document.querySelector("#box4").style.backgroundColor = "#198167"
//     document.querySelector("#box1").style.color = "#085a08)"
// } else if (num1 >= 0.312 && num2 < 0.455) {
//     document.querySelector("#box4").style.backgroundColor = "golden"
//     document.querySelector("#box1").style.color = "#303330"
// } else if (num5 >= 0.112 && num5 <= 0.643) {
//     document.querySelector("#box4").style.backgroundColor = "#000000"
//     document.querySelector("#box1").style.color = "#b85858"
// } else if (num8 <= 0.712 || num6 <= 0.443) {
//     document.querySelector("#box4").style.backgroundColor = "purple"
//     document.querySelector("#box1").style.color = "pink"
// } else if (num3 < 0.312 || num4 > 0.142) {
//     document.querySelector("#box4").style.backgroundColor = "#053b42"
//     document.querySelector("#box1").style.color = "purple"
// } else {
//     document.querySelector("#box5").style.backgroundColor = "yellow"
//     document.querySelector("#box1").style.color = "orange"
// }if (num1 < 0.199) {
//     document.querySelector("#box5").style.backgroundColor = "#085a08"
//     document.querySelector("#box1").style.color = "rgb(89, 56, 119)"
// } else if (num1 >= 0.312 && num2 < 0.455) {
//     document.querySelector("#box5").style.backgroundColor = "#303330"
//     document.querySelector("#box1").style.color = "red"
// } else if (num5 >= 0.112 && num5 <= 0.643) {
//     document.querySelector("#box5").style.backgroundColor = "#b85858"
//     document.querySelector("#box1").style.color = "springgreen"
// } else if (num8 <= 0.712 || num6 <= 0.443) {
//     document.querySelector("#box5").style.backgroundColor = "purple"
//     document.querySelector("#box1").style.color = "yellow"
// } else if (num3 < 0.312 || num4 > 0.142) {
//     document.querySelector("#box5").style.backgroundColor = "#00bfd8"
//     document.querySelector("#box1").style.color = "springgreen"
// } else {
//     document.querySelector("#box5").style.backgroundColor = "orange"
//     document.querySelector("#box1").style.color = "pink"
// }

// }
// random()  // but not a good way of programming

// let boxes = document.querySelector(".conatiner").children

function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()*255);
    let val2 = Math.ceil(0 + Math.random()*255);
    let val3 = Math.ceil(0 + Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3} `
}

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
});
let random = Math.random();
console.log(random);

let num1 = prompt("Enter First Number: ");
let operator = prompt("Enter operator: ");
let num2 = prompt("Enter Second Number:");

let obj = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**"

}

if (random > 0.1) {
    // Perform correct calculation
    alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`)
} else {
    operator = obj[operator]
    alert(`The result is ${eval(`${num1} ${operator} ${num2}`)}`)
}


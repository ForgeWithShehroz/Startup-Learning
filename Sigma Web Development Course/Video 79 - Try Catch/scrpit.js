let a = prompt("Enter first Number")
let b = prompt("Enter second Number")
let sum = parseInt(a) + parseInt(b)

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry, this is not allowed");

}
try {

    console.log(sum*x)

} catch (error) {
    console.log("An error occured");

}



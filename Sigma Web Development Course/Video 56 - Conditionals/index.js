console.log("Hello, I am conditional tutorial!");

let age = 15;
let grace = 2;

// console.log(age * grace);
// console.log(age - grace);
// console.log(age + grace);
// console.log(age / grace);
// console.log(age ** grace);
// console.log(age % grace);

if (age > 18) {
    console.log("You can drive!");

}

else if (age == 0) {
    console.log("Are you kidding");

}

else {
    console.log("You cannot drive!");
}

// ternary operator

let a = 5;
let b = 10;
let x = a > b ? (a - b) : (b - a)
console.log(x)

/* 
it changes it to:

 if(a>b){
    let x = a - b;
}

else{
    let x = b - a;
}

*/
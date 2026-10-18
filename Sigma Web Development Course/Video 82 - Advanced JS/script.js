/* Using IIFE */

(function printHello(msg) {
    console.log(msg);

})("Hello");


// printHello() // instead of this we can simply call function by using (function)(); // semicolon is essential


/* Destructuring */

let [a, b] = [1, 2];
console.log(a, b); // we can't make like this (a, b) = (1, 2) or a, b = 1, 2

let [x, y, ...rest] = [5, 6, 7, 9, 0]; // it will be considered like this x=5, y=6 and rest=[7, 9, 0]
console.log(x, y, rest);

// Object destructuring 
let obj = {
    t: 100,
    r: 200,
    s: 455,
}

let { t, r } = obj // we can pull out the required values
console.log(t, r)


/* Spread operator */
// we can spread an array content 

function sum(a, b, c) {
    return a + b + c
}
let arr = [1, 3, 4, 5];
// it is prefered of doing this as console.log(arr[0] + arr[1] + arr[2])
let addition = sum(...arr) // it look likes this sum(1, 3, 4, 5)
console.log(addition);


// Special case
let array = [12, 3, 4]
let object = {...array} 
console.log(object);




/* Hosting */
(function hosting() {
    console.log(q); // => undefined as it is declared not initialized
    msg("Hello")
    // if we declare variable at the any place of the code it is declared like it is declared at the first line
    var q = "What";
    
    // or we can also work for the functions
    function msg(msg) {
        console.log(msg);
        
    }
})();
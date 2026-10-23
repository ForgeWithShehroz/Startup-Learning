let string1 = "Muhammad Shehroz";
let string2 = " myCOLLEGE";
let string3 = "  stringthree    ";

console.log(string1.toUpperCase());
console.log(string2.toLowerCase());
console.log(string4.trim()); // removes whitespace)

// other methods
console.log(string1.slice(0, 4));
console.log(string1.concat(string2));
console.log(string1.replace('mm', 'm'));
console.log(string.charAt(4)); // to find index and * string1[0] // to fetch index



// Important and different using replcaeAll

let string4 = "hellololo";
console.log(string4.replace('lo', 'p')) // this will replace the single char not repeated charsfor this should use
console.log(string4.replaceAll('lo', 'p'))  // output helppp
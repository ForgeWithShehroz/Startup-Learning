let array = [1, 2, 3, 5, 7]

console.log(array);
console.log(array.length);
console.log(array[0]);

array[0] = 344;
console.log(array, typeof array); // prints typeof array

console.log(array.toString()); // Chanes array to string 

// array.join(" & ";) // changes comma to this value given as an argument

// array.pop(); // pops the elements at ending of the array
// array.shift(); // removes the element from begining 

// array.push("PushedEl");  // append/adds the element at end
// array.unshift("UnshiftedEl"); // adds elm at the begining 

console.log(array);


let a1 = [1, 2];
let a2 = [3, 5];
let a3 = [6, 8];

finalArr = a1.concat(a2, a3) // returns a new array doesn't changes the original array
console.log(finalArr);  

let elArr = [8, 2, 45];
console.log(elArr.sort());


let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]  
newArr.splice(2, 3, "Shehroz", "Kamal") // first takes from which element to start and then how many elements to delete and then what to insert starting from that point of start as there is the 2 index
console.log(newArr);

let array = [0, 1, 2, 3, 4, 5]

array.map((val) => {
    console.log(val);
    
});

// Making a new array using map

let newArray = array.map((val) =>{
    return val*val;
});

console.log(newArray);



// Using filter (it is used to filter requirements)
let arr = [0, 1, 2, 3, 4, 5]
let evenArray = arr.filter((val) =>{
    return val%2 === 0;
});

console.log(evenArray);


// Using redcuce in javascript
let ar = [0, 5, 233, 2, 5, 9]

let output = ar.reduce((previouseVal, nextVal) =>{
    return previouseVal*nextVal;
});

console.log(output);

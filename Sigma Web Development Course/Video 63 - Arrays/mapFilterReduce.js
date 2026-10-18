let arr = [4, 55, 7, 13, 62];

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element**2);
    
// } // its a classical method but we can use the map 


let newArray = arr.map((e, idx, array) =>{
    return e**2
})

console.log(newArray);


const greaterThanSeven = (e) =>{
    if (e>7) {
        return true
    }
    return false
}

console.log(arr.filter(greaterThanSeven))

let addArr = [3, 4, 6, 7]
const add = (a, b) =>{
    return a+b
}
console.log(addArr.reduce(add));

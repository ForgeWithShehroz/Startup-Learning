let a = 6;

function factorial(number) {
    let arr = Array.from(Array(number+1).keys());
    console.log(arr);
    // let c = arr.slice(1,).reduce((a,b) =>{return a*b} ) // we can omit to use return as a shorthand 

    let c = arr.slice(1,).reduce((a,b) => a*b)
    // console.log(c);
    return c
    
}

function facFor(number) {

    let fac = 1;
    for (let index = 1; index <= number; index++) {
        fac = fac*index

    }
    return fac
}

let fac = factorial(a)
console.log(facFor(a));

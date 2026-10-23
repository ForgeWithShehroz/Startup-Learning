function sum(a, b) {
    return a+b;
}

let s = sum(223, 5215222)

const mulArrowFunc = (a, b) => {
    console.log(a*b);
}

mulArrowFunc(3, 2)
console.log(mulArrowFunc);



/* We can also use the functions as parameters and variables

function func() {
    console.log("Hello");
}

function functwo(func) {
    return func;
}

applyfunc = functwo(func)
console.log(applyfunc)

*/
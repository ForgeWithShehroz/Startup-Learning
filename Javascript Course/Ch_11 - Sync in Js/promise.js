// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promsie!");
//     reject("An Error Occured...")    
// })  // using reject 

// let newPromise = new Promise((resolve, reject) => {
//     console.log("Data fetched successfully!")
//     resolve("The result is taken successfully!")
// }) // using resolve

// console.log(newPromise);


/* The way to make the promise in js */

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Get data of id:", dataId);
//             resolve("Data fetched succesfully!");
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000);
//     });
// }       

// let finalVal = getData(123);
// console.log(finalVal)


// using promises as they are not made by us but they are ysed by us 

const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Hiring a promise to work!");
        // resolve("Successfully finished the work!");
        reject("We got an error!")
    });
}

let promsie = getPromise();
promsie.then((res) => {
    console.log("This is use of promises to work if promise is resolved else to use catch.");
    console.log(res); // where res stores the value given as an argument to => resolve("Successfully finished the work!");
})

promsie.catch((err) => {
    console.log("If promise is not resolved we use an catch for reject");
    console.log(err); // where error contains the error conatining the line    =>    reject("We got an error!")
})
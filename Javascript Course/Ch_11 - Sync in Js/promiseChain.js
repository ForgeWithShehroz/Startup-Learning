// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1")
//             resolve("Successfully resolved promise!")
//         }, 2000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2")
//             resolve("Successfully resolved promise!")
//         }, 2000);
//     });
// }

/* this fetches the data at the same time but we don't want it so we have used chainging of promises */

// console.log("Fetching data 1...");
// let promise1 = asyncFunc1();
// promise1.then( (result) =>{ 
//     console.log(result);
// });

// console.log("Fetching data 2...");
// let promise2 = asyncFunc2();
// promise2.then( (result) =>{ 
//     console.log(result);
// }); 


/* Using Chaining */
// console.log("Fetching data 1...");
// let promise1 = asyncFunc1();
// promise1.then((result) => {
//     console.log(result);

//     console.log("Fetching data 2...");
//     asyncFunc2().then((result) => {
//         console.log(result);
//     });
// });



/* But the actual promise chainging is to first return the data and then use the data.*/

function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data of", dataID + "!");

            if (getNextData) {
                getNextData();
            }
            resolve("Data Fetched Successfully!")
        }, 2000);
    });

}

// console.log('Fetching the data1');

// getData(1).then((result) =>{
//     console.log(result);
//     getData(2).then((result) => {
//         console.log(result);
//         getData(3).then((res) =>{
//             console.log(res);
//         });
//     });
// });


getData(1).then((result) => {
    console.log(result);
    return getData(2)
}).then((res) => {
    console.log(res);
})


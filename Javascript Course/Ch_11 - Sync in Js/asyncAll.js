function getData(dataID, getNextData) {
    setTimeout(() => {
        console.log("It gives output after 5 seconds.");
        console.log("Data of ", dataID + "!");
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    console.log("Getting data 2....");
    getData(2, () => {
        console.log("Getting data 3....");
        getData(3, () => {
            console.log("Getting data 4....");
            getData(4);
        });
    });
});  // This is called nested call backs and also can call it callbackHell.



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

console.log('Fetching the data1');

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
})  // this is the way of using the promises to return the data 



/* Using async-await */
function getData(dataID, getNextData) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data of", dataID + "!");
            resolve("Data Fetched Successfully!")
            if (getNextData) {
                getNextData();
            }
        }, 2000);
    });
}

// using async-await
async function getAllData() {
    console.log("Getting data1");
    await getData(1); // it first executes 
    console.log("Getting data2");
    await getData(2); // it waits for the execution of the first data 
    console.log("Getting data3");
    await getData(3); // it waits for the execution of the first data 
    console.log("Getting data4");
    await getData(4) // it waits for the execution of the first data 
}


getAllData()
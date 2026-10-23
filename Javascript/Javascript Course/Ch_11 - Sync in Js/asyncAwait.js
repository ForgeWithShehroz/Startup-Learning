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


getAllData();  


// using IIFE when we don't want to use functions manytimes and it is used when we want to run functions without call as syntax => (func)();

(async function () {
    console.log("Getting data1");
    await getData(1); // it first executes 
    console.log("Getting data2");
    await getData(2); // it waits for the execution of the first data 
    console.log("Getting data3");
    await getData(3); // it waits for the execution of the first data 
    console.log("Getting data4");
    await getData(4) // it waits for the execution of the first data 
})();
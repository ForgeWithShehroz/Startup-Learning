/* Synchronous means code with regular pattern without any dealy while ASynchronous means code having a delay to work with */

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

        })

    })

});  // This is called nested call backs and also can call it callbackHell.
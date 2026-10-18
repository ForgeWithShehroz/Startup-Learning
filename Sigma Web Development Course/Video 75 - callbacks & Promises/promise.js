// dummy promise

const prom1 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.5) {
        reject("This promise is rejected as no number supported your needs!")
    } else {

        setTimeout(() => {

            console.log('This promise is completed');
            resolve("The data Fetched through promise!");  //This value will be send to then variable when promise will be resolved
        }, 2000);
    }
})

const prom2 = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.5) {
        reject("This promise is rejected as no number supported your needs 2!")
    } else {

        setTimeout(() => {

            console.log('This promise is completed 2');
            resolve("The data Fetched through promise 2!");  //This value will be send to then variable when promise will be resolved
        }, 2000);
    }
})

const p3= Promise.all([prom1, prom2])
p3.then((msg) => {
    console.log(msg);
}).catch((err)=>{
    console.log(err);
    
})
const p4= Promise.allSettled([prom1, prom2])
p4.then((msg) => {
    console.log(msg);
}).catch((err)=>{
    console.log(err);
    
})

// prom1.then((msg) => {
//     console.log(msg);
// }).catch((err)=>{
//     console.log(err);
    
// })

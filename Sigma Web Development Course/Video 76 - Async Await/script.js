/* Settled means resolve or reject

resolve means promise has settled successfully 
reject means promsie has not settled successfully

*/


async function promiseGetData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("This is Data!")


        }, 2000)
    })
}

console.log('This is the first code not included in the async await');
console.log('This is the second code not included in the async await');
console.log('This is the third code not included in the async await');

async function main(){
    console.log('This is the data within async function before await');

    let data = await promiseGetData()
    console.log(data);
    console.log("This is the data after await ");
    console.log("This data will be printed after await is resolved");
    
    
}

main()
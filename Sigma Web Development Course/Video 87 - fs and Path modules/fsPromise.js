// const fs = require("fs/promises")

import fs from "fs/promises"

/* Callback Hell to avoid this we use promise */

// const fs = require("fs")

// fs.writeFile("callbackHell.txt", "This is the call back hell", ()=>{
//     console.log("Entering Callback Hell");
//     fs.readFile("callbackHell.txt", (err, data)=>{
//         console.log(data.toString());
//         fs.writeFile("CallbackHell2.txt", "This is written at line 7", ()=>{
//             console.log("This is the callback 2nd lines");
//             fs.readFile("CallbackHell2.txt", (err, data)=>{
//                 console.log(err, data.toString());
                
//             })
//         })
//     })
// })

/* To callback hells we use promise */

let a = await fs.writeFile("promise.txt", "This is the file containing the content of the promiseJS.")

console.log(a);

let b = await fs.readFile("promise.txt")

console.log(b.toString());


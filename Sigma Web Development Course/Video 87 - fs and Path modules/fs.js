const fs = require('fs');
// console.log(fs);

console.log("this will be firstly executed!");

// let first = fs.writeFileSync("first.txt", "This will be secondly executed and content of the first file.");

/* but instead of the upper we should use writeFile */

fs.writeFile("SecondAsync.txt", "This is written after all lines beacause nature of writeFile is async ans js too.", ()=>{
    console.log("Executed At The END!");
})

console.log("This is the end content");


/* Reading from a file */
fs.readFile("SecondAsync.txt", (error, data)=>{
    console.log(error, data.toString());  // must be converted to string to see that content
    // no error means null and the last is data
})
// console.log("I am Shehroz");
// console.log("I am Kamal");


// setTimeout(() => {
//     console.log("I am inside settimeout!");
    
// }, 3000);
 
// setTimeout(() => {
//       console.log("I am inside settimeout 2!");
// }, 2000);


// console.log("I am other ");


// callback hell
const fn = (arf) =>{
    console.log("Print Nothing");
    
}

const callback = (arg, fn) =>{
    console.log(arg);
    fn()
}

const loadScript = (src, callback) =>{
    let sc = document.createElement("script")
     sc.src = src;
     sc.onload = callback("Shehroz", fn);
     document.head.append("sc")
}

loadScript("SRCHERE", callback)
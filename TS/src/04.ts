let response: any = "41";

/* Forcefull type assertion: forcefully telling ts the type of a variable by using as "type" */

// length cannot be executed by ts since we forcefully asks ts to consider it as a string see in the second line
let numericLength: number = response.length
let numericLength2: number = (response as string).length

// in this example we'll tell the object that the type of bookString is Book
type Book = {
    name: string;
}

let bookString = '{"name": "Abandon Era"}';
let bookObject = JSON.parse(bookString) as Book;
// in the next line when we type . next to bookObject to see the suggestions it will appear
console.log(bookObject)

// telling ts for the type of DOM elements like
const inputElements = document.getElementById("username") as HTMLInputElement

// don't get confused of assertion with conversion as conversion step is executed by js and assertion is executed by ts



/* any and unknown finishing */
let val: any;
val = "String one"
val = [2, 3, 5]; // it will not give error due to any type definition
val = 245; // it will not give error due to any type definition
val.toUpperCase() // it will not give error lines due to any but will give runtime error

let newval: unknown;
newval = "String one"
newval = [2, 3, 5]; // it will not give error due to unkown type definition
newval = 245; // it will not give error due to unknown type definition
// newval.toUpperCase() // it will must give error lines due to unkown we have to make a check before these lines

if(typeof newval==="string"){
    newval.toUpperCase()
}


/* using try catch in ts */
try {
    
} catch (error) {
    if(error instanceof Error){ // first we have to check if it  is an instance of Error then erro log can be used else it will give error
        console.log(error)

    }
    
}

// using unknown with string data
let data:unknown = "chai aur code";
let strData: string = data as string


/* Never and void in ts */
type Role = "admin" | "user" | "superadmin"

function redirectBasedOnRole(role:Role): void{
    if(role==="admin"){
        console.log("Redirecting to admin dashboard");
        return;
    }
    if(role==="user"){
        console.log("Redirecting to user dashboard");
        return;
    }
    role;  // hover on role in this line you'll see a never ts is asking it should not be given any value but when we add something more in the Role as `type Role = "admin"|"user"|"superadmin" it will give suggestion to make also a check for superadmin
}


// using never in production may be as this as
function serverRes():never{
    while(true){
        // as it will never return anything just a loop of server that actives when user makes a request and server fullfills it 
    }
}

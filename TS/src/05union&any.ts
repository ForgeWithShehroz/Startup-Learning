// use union as we want to specify as many type of values can be of data as it can be a string or number or boolean when it will come from API

let data: string | number = "1M"
data = 100000 // now it is completely valid as we specified that it can be either number or string

let apiResquestStatus: "pending" | "success" | "error"  = "pending" // in this e.g. we have specified that it can only have 3 data types

// let apiResquestStatus: "pending" | "success" | "error"  = "Shehroz" // it is invalid
// let apiResquestStatus = "Q" // it is invalid


/* Any type especially try to avoid any */
let chaiOrder; //its type for now is any as it is not declared 


// try to use unknown instead of any


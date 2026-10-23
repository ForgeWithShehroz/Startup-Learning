// returning string and number
function makeChai(name: string, cups: number) {
    console.log(`Making ${name} chai ${cups} in number!`);
}

// returning number in a function
function numberFirm(cups: string): number {
    return 2;
}


// function makeOrder(order: string): string{
//     if(!order) return null
//     return order
// }

// we can use void as in logging in 
function Logger(): void {
    console.log("We have logged in!");

}

// using optional parameters
function orderCha(type?: string) {

}

function orderChai(type: string = "Steel") {

}

// Don't get afraid of the huge syntax of functions like following
function theFunction(params: {
    name: string;
    type: string
    sugar: number
    tooHot: boolean
}): number {
    return 4
}
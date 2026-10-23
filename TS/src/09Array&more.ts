const stringArray: string[] = ["pen", "pencil", "sharpner"] // simple string array we can also write in this way on 2line
const stringArray2: Array<string> = ["pen", "pencil", "sharpner"] // we can also make he same for number as Array<number>


/* Making array of objecets */
type Chai = {
    name: string;
    price: number
}

const orders: Chai[] = [
    { name: "Shehroz", price: 2 },
    { name: "Shehroz", price: 2 },
]

// using readonly with arrays
const Aray: readonly string[] = ["one", "two"] // now we are not able to modify array them like following
// Aray.push("something")

// two dimensional arrays
const twoDMArray: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]


// Making tuples

let chaiTuple: [string, number];
chaiTuple = ["stringValue", 20];

// chaiTuple = [20, "stringValue"]; // this is not allowed as order matters



let userInfo: [string, number, boolean?];
userInfo = ["one", 2]
userInfo = ["one", 2, true]

const locaton: readonly [string, number] = ['the', 25.52]  // using readonly tuples

// making named tuple
const namedTuple: [name: string, price: number] = ["AdhrakhChai", 24] // these are called named tuples 

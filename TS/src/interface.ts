/* interfaces just define structures they are not used to insert data */

interface Chai {
    flavor: string;
    price: number;
    milk?: boolean
}

const masala: Chai = {
    flavor: "masala",
    price: 30
}

interface Shop {
    readonly id: number;
    name: string
}

const s: Shop = {
    id: 1, name: "ChaiCode Caffe"
}

// s.id = 2 // this will give error as this is readonly


// I don't understand
interface DiscountCalculator {
    (price: number): number
}

const apply40: DiscountCalculator = (p) => p * 0.4

interface TeaMachine {
    start(): void;
    stop(): void
}

// we defined the structure of all machines that must have this functionality as it contains two functions and used interface for structure so we have to give the methods within the actual object like we have to pass the values of the variables

const machine: TeaMachine = {
    start() {
        console.log("start");

    },
    stop() {
        console.log("stop");

    }
}


// making another signature
interface ChaiRatings {
    [flavor: string]: number; // variables=> string: dataType: number

    // we are telling that we can make many strings with this as variable as string but dataType is number
}
// in this way we use multiple variables and values within signle line of code we defined previously

const ratings: ChaiRatings = {
    masala: 0.4,
    ginger: 4.5
}

/* interfaces make work more simple as they merge two properties of one schema like */
interface User {
    name: string; // user schema information came from another code file
}

interface User {
    age: number; // user schema information we defined in our file of code
}

const u: User = {
    name: "Shehroz",
    age: 18
}


/* extending multiple interface also called merging but manually */
interface A { a: string }
interface B { b: string }

interface C extends A, B { }
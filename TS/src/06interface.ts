type ChaiOrder = {
    type: string;
    sugar: number; 
    strong: boolean;
} //*1
/*


// as there are many functions that have the same type so we should make typeusing type as we did on previous on upper part  like  *1
function makeChai(order: { type: string; sugar: number; strong: boolean }) {
    console.log(order)
}
function serveChai(order: { type: string; sugar: number; strong: boolean }) {
    console.log(order)
}
    */
function makeChai(order: ChaiOrder) {
    console.log(order);
}
function serveChai(order: ChaiOrder) {
    console.log(order);
}


type TeaRecipe = {
    water: number
    milk: number;
}  // for objects type works in classes like following it is:

class MasalaChai implements TeaRecipe {
    water = 50;
    milk = 100
}

// but for hard coded values or other values rather than object it works we interface instead of type and it is also commoly used for objects and classes


type CupSize = "small" | "medium";
// but type alias with hard coded values is not worthy because classes implements objects or objects type so use interface
interface CupSize2 {
    size: "small" | "medium" // for interfaces hard coded values are given some variable and also equal(=) sign is removed from syntax
}


class CupSizes implements CupSize2 {
    size: "small" | "medium" = "small";
}


// also this type of vars or this type of decelaration is not allowed within classes in ts
// type Response = {ok: true} | {ok: false}

// class ResponseClass implements Response {
//     ok: boolean = true;
// }  // it is invalid



type TeaType = "masala" | "ginger" | "lemon" // it is  called literal types as we have literally defined types
function orderChai(t: TeaType) {
    console.log(t)
}


/* Adding two type or more types */
type BaseChai = { tealeaves: number }
type Extra = { masala: number }

type MasalaTea = BaseChai & Extra // we assigned two properties vars to one signle containing

const Cup: MasalaTea = {
    tealeaves: 3,
    masala: 2 // we have to declare all properties else we have optional one
}


/* Making optional values */
type User = {
    username: string
    bio?: string
}

const u1: User = { username: "Shehroz" }
const u2: User = { username: "Shehroz", bio: "I am Shehroz" }



/* Using Readonly */
type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "StrikePerson",
    version: 2
}

cfg.version = 3 // it is allowed
// cfg.appName = "SR" // it is not allowed as value of appname is readonly we can declare it once and can never change that value
// we use semiconols when we infer properties

type Tea = {
    name: string;
    price: number;
    ingredients: string[]
}

// if it looks like a duck if it walks like a duck it might be a duck 

const adhrakChai: Tea = {
    name: "AdhrakChai",
    price: 35,
    ingredients: ["Lemon Leaves", "Adhrak"]
}

// we have to just bare minimum properties only
type Cup = { size: string }

let smallCup: Cup = { size: "500ml" }
let largeCup = { size: "500ml", metal: "steel" }

smallCup = largeCup


type Brew = {brewTime: number}
const coffee = {brewTime: 4, beans: "arabica"}
const ChaiBrew: Brew = coffee
// const ChaiBrew: Brew = {brewTime: 4, beans: "arabica"} // we can assign declaration like line:28 but cant make extra values



/* using partial to skip declaring values */
type Chai= {
    name: string;
    masala: number;
}

const updateChai = (updates: Partial<Chai>) => {

}

updateChai({}) // we can give empty object or give any number of values we initialized


/* using required it means we have to give all values to vars no one can be optional even if we declared we declared them optional like following */

type NewTea = {
    name?: string;
    bio?: string
}

const Order = (order: Required<NewTea>) =>{
    console.log(order)
}

Order({
    name: "Shehroz",bio: "Nothing here in the bio"})


/* using pick as we can pick vars to be given the values */
type TwoTea  = {
    name: string;
    sugar: number;
    bio: string;
    masala: string | number
}

type BasicTeaInfo = Pick<TwoTea, "name" | "bio">;

const teaInfo: BasicTeaInfo = {
    name: "Shehroz",
    bio: "the bio is empty"
}



/* using omit as we can omit any property if we want like a secret ingredient we don't want to show */
type newChai = {
    name: string;
    sugar: number;
    bio: string;
    secretIngredient: string
}

type OrderedValues = Omit<newChai, "secretIngredient">  
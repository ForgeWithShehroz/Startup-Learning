class Chai {
    flavour: string;
    price: number;

    constructor(flavour: string, price: number) {
        this.flavour = flavour;
        this.price = price;
    }
}

/* using public private and protected vars making a method to reveal the protected variable or private variables */

const ExChai = new Chai("masala", 25); // we have to pass the required values of the vars in typescript
ExChai.flavour = "Ginger";

class Chai2 {
    public flavour: string = "masala"; // this variable is acessible  publicaly I mean will be shown in the suggestions

    private secretIngredients = "Cardamon"; // this variable is just shown in this class not available in the suggestions 

    protected changeShopName: string = "Chai Corner"; // we use protected when we want to reveal the variable just within this class and its children/inherited classes 

    reveal() { // we can use reveal if we want to show the variable publicaly
        this.secretIngredients // we use this. to set the variable to shown
    }
}

const c = new Chai2();
c.flavour // and 
c.reveal()


// using protected again 
class Shop {
    protected shopName = "Chai corner"
}

class BranchShop extends Shop {
    getName() {
        return this.shopName
    }
}

/* Other syntax of making private vars as instead of just using private keyword we can use a hash # */
class Walet {
    #balance = 100;
    quantity = 2
    returnBalance() {
        return this.#balance // we have to use hash to access that var but we don't need to use # for that outside of function as we can't access that outside the class
    }
}

const w = new Walet();
w.returnBalance()
w.quantity

/* using readonly within the classes */
class Cup {
    readonly capacity: string = "250ml"; // we can;t assign in the class using without string like that capacity = "250ml"
    constructor(capacity: string) {
        this.capacity = capacity
    }
}


/* convention when using private vars and also about controlled gates (where controlled gates means getter and setter) */
class ModernChai {
    private _sugar: number = 2;

    get sugar() {
        return this._sugar
    }

    set sugar(value: number) {
        this._sugar = value

    }
}

const chai = new ModernChai();
chai.sugar = 3


/* static values are those values which can be only accessed by classes not by the objects */
class EkChai {
    static shopName: string = "Chai Corner";

    constructor(public flavour: string) { }
}

console.log(EkChai.shopName)


/* Making abstract classes: when we want that no object might be made by the class we make them as abstract class */
abstract class Drink {
    abstract make(): void  // we make these classes just for schema they don't return anything
}

class MyChai extends Drink {
    make() {

    }
}


/* Composition the other method instead of inheritence sometimes preffered by users */
class Heater {
    heat() { }
}

class ChaiMaker {
    constructor(private heater: Heater) {
        // we use composition to define the schema of the child class using parent class as this heater: Heater 
    }
    make() {
        this.heater.heat();
    }
}
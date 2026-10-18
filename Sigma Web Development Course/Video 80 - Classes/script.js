let animal = {
    eats : true,
}

let rabbit = {
    jumps : true
}

rabbit.__proto__ = animal;

class Animal {
    constructor(owner) {
        this.name = owner // it means that object.name = name where name will come from the class attributes
    }

    eats(){
        console.log("I eat");
        
    }

    jumps(){
        console.log("I jumps");
        
    }
}

class Lion extends Animal{
    constructor(name) {
        super(name);
        
    }

    jumps(){
        super.jumps()
        console.log("I like to prey insted of jumping"); // this is called method overriding.
        
    }
}

let dinasoure = new Animal("dinasoure");
console.log(dinasoure.eats());

let lion = new Lion("Shera")
console.log(lion.jumps());

class Parent {
    constructor(greet) {
        this.greet = greet;
    }


}

class Child extends Parent {
    greeter() {
        console.log("Saying, hello!");

    }
}

let object = new Child("Hello");
console.log(object.greet);
console.log(object.greeter());


// using super
class Person {
    constructor(name) {
        console.log("Entered Parent Constructor");
        this.species = "homo sapiens";
        this.name = name
    }

    eat() {
        console.log("The person eats daily.");
        
    }
}

class Engineer extends Person {
    constructor(name, branch) {
        console.log("Entered Child Constructor");
        
        super(name) // To invoke parent class constructor
        this.branch = branch;
        console.log("Exited child constructor");
        
    }

    work() {
        console.log("Solve problems, and builds something!");
    }
}

const obj = new Engineer("Shehroz", "Chemical Engineer ");
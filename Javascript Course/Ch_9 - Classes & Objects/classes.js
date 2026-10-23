class ToyotaCar{
    start() {
        
    }
    stop() {

    }
    setBrand(brand) {
        this.brand = brand
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand('fortuner')
console.log(fortuner.start());



//or 
class Car {
    constructor(brand) {
        this.brand = brand
    }
}

let lexus = new Car("lexus");
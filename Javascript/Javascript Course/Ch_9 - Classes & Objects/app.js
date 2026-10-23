const student = {
    fullName : "Muhammad Shehroz",
    marks : 92.2,
    printMarks : function(){
        console.log('Your marks are', this.marks)
    },
};

/*1 Using prototypes of an object within another object 1*/
const employee = {
    calcTax () {
        console.log("The rate of tax is 10%");
        
    }
};

const Shehroz = {
    salary: 50000,
};

Shehroz.__proto__ = employee;
console.log(Shehroz.calcTax());

/*1                  1*/
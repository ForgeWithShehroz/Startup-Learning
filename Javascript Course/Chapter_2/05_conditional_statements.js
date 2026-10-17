// 1) if statements

let age = 17;

if(age>=18){
	console.log('You can vote!');
}


// 2) if-else statments
let Age = 15;

if (Age<=14){
	console.log("Can Slide!");
} else{
	console.log("Cannot Slide!");
}

// 3) if-else if-else statements
let age3 = 35;
let maturity;

if(age3<18){
	console.log("You are a child!");
	maturity = 'None';
} else if(age3>=18 && age3<30){
	console.log("You are an adult!");
	maturity = 'Adult';
} else{
	console.log("You are a mature person!");
	maturity = 'Mature ';
}


console.log(maturity



// 4) ternary conditional operator // not prefered for large conditions for small conditions prefered
// ternary operator 'condition ? true:false'  

let Age = 19;

let theResult = Age >= 18 ? "adult" : "not adult"
console.log(theResult)
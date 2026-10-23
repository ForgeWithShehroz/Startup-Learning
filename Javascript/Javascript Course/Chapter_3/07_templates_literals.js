// Template Literal

let specialString = `This is a template literal`;

console.log(specialString);
console.log(typeof specialString);

// purpose of using the template literal

let object = {
	item: 'pen',
	price: 100,
}

console.log("The item is", object.item, " and the price is", object.price) // method without teplate literals
let using_liteals = `The item is ${object.item} and the price is ${object.price}`;
console.log(using_liteals);
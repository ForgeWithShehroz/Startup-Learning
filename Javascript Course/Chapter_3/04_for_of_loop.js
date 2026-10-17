// for of is used to iterate thorugh string/arrays data

let string = "Shehroz";

let size = 0;
for(let i of string) {
	console.log("i =", i);
	size++;
}

console.log("Size of string is", size)

// output:
// i = S
// i = h
// i = e
// i = h
// i = r
// i = o
// i = z


// for of stores the characters of string.
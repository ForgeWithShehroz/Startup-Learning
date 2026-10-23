let items = [250, 645, 300, 900, 50]
let i = 0

for(let val of items) {
	let offer = val/10;
	items[0] -= offer;
	console.log(`Value at index ${i} is ${val}`)
	console.log(`Value after offer ${items[i]}.`)
	i++
}



// using for loop  // better method

let prices = [250, 645, 300, 900, 50]

for(let i=0; i<prices.length; i++) {
	let offer = prices[i]/10;
	prices[i] -= offer
}

console.log(prices)
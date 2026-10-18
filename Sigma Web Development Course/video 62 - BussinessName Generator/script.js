/* 
Adjectives:
Crazy 
Amazing 
Fire

Shop Name:
Engine
Foods
Garments

Another Word:
Bros 
Limited
Hub 
*/

let num = Math.random()
let first, sec, third;

if(num<0.33){
    first = "Fire"
} else if(num>=0.33 && num<0.66){
    first = "Crazy"
} else {
    first = "Amazing"
}

num = Math.random()
if(num<0.33){
    sec = "Foods"
} else if(num>=0.33 && num<=0.66){
    sec = "Garments"
} else {
    sec = "Engine"
}

num = Math.random()
if(num<0.33){
    third = "Limited"
} else if(num>=0.33 && num<0.66){
    third = "Hub"
} else {
    third = "Bros"
}


console.log(`${first} ${sec} ${third}`);

const expr = "Papayas"

switch (expr){
case "Peaches":
	console.log("These are yellow_red Mangoes.");
	break;
case "Apples":
	console.log("These are bloody Apples.");
	break;
case "Mangoes":
case "Papayas":
	console.log("These are delecious Mangoes and Papayas.");
	break;
default:
	console.log(`Sorry, We are out of ${expr}!`);
}
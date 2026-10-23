let grades = prompt("Enter your grades:");
let grade;

if (grades>=90){
	grade = "A";
} else if(grades<=89 && grades>=70){
	grade = "B";
} else if(grades<=69 && grades >=60){
	grade = "C";
} else if(grades<59 && grades>=50){
	grade = "D";
} else{
	grade = "F";
}

console.log("Your grade according to your grades is", grade, ".")
let students = ['Muhammad' ,'Shehroz','Kamal','Hasnain', 'Rehan', 'Farhan', 'Daniyal', 'Aslam', 'Wasif'];

for(let index=0; index<students.length; index++){
	console.log(students[index]);
}


// using for of loop
for(let el of students) {
	console.log(el)
}

for(let el in students) {
	console.log(el)
}
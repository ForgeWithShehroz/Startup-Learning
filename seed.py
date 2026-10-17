
from random import randint
from .models import *

def seed_db(n=10)->None:
	emails = ["Danie@gmail.com", "Lorem@gmail.com", "Shehroz@gmail.com",
	 "Yousaf@gmail.com", "Joseph@gmail.com", "Ali@gmail.com", "Raza@gmail.com", "Mahar@gmail.com",
	  "Gupta@gmail.com", "Abhijeet@gmail.com", "Sarim@gmail.com", "Rehan@gmail.com", "Farhan@gmail.com",
	   "Ayesha@gmail.com", "Sidra@gmail.com", "Ghazala@gmail.com", "Fatima@gmail.com", "Mehreen@gmail.com"]
	names = ["Daniel", "Lorem", "Shehroz", "Yousaf", "Joseph", "Ali", "Raza", "Mahar", "Gupta",
	 "Abhijeet", "Sarim", "Rehan", "Farhan", "Ayesha", "Sidra", "Ghazala", "Fatima", "Mehreen"]
	adresses = ["Sillanwali", "Sargodha", "Sahiwal", "Grudaspur", "Australia", "Yorp", "Mombay",
	 "Delhi", "Lahore", "Islamabad", "Iqbal Town", "Gulbarg", "Karachi", "Sindh", "Faroka", "ShaheenBad"]

	for (name, adress, email) in (names, adresses, emails):

		department_objs = Department.objects.all()
		random_index = randint(0, len(department_objs)-1)
		department = department_objs[random_index]
		student_id = f"STU-0{randint(100, 999)}"
		studen_name = name
		student_email = email
		student_age = randint(20, 30)
		student_adress = adress

		student_id_obj = StudentID.objects.create(student_id = student_id)

		student_obj = Student.objects.create(
			department = department,
			student_id = student_id_obj,
			student_name = student_name,
			student_email = student_email,
			student_age = student_age,
			student_adress = student_adress
			) 
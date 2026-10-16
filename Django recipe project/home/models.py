from django.db import models

# Create your models here.
class Student(models.Model):
	name = models.CharField(max_length=20)
	age = models.IntegerField ()
	email = models.EmailField(null=True, blank=True)
	adress = models.TextField()

	def __str__(self):
		return self.name.title()


class Car(models.Model):
	cname = models.CharField(max_length=20)
	cspeed = models.IntegerField()

	def __str__(self):
		return self.cname.title()
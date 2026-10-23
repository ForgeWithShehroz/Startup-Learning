from django.db import models

# Create your models here.
class Topic(models.Model):
	"""The topic the user is learning about."""	
	text = models.CharField(max_length=200)
	date_added = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.text

class Entry(models.Model):
	"""Something specific learned about a topic."""
	topic = models.ForeignKey(Topic, on_delete=models.CASCADE)

	text = models.TextField()
	date_added = models.DateTimeField(auto_now_add=True)

	class Meta:
		verbose_name_plural = 'entries'


	def __str__(self):
			return f"{self.text[:50]}"


class Student(models.Model):
	first_name = models.CharField()
	last_name = models.CharField()
	name = models.CharField()

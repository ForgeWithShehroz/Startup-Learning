from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Recepie(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE, default=1)

    r_name = models.CharField(max_length=100)

    r_desc = models.TextField()

    r_image = models.ImageField(upload_to="recepies/")

    def __str__(self):
        return self.r_name
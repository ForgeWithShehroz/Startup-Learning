from django.contrib import admin
from .models import Topic, Entry, Student

# Register your models here.
admin.site.register(Topic)
admin.site.register(Entry)
admin.site.register(Student)
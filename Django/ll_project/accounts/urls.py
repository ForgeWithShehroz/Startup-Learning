""" Defines url patterns for accounts. """

from django.urls import path, include

app_name = "accounts"

# Include default auth urls.
urlpatterns = [
    path('', include('django.contrib.auth.urls')),
]

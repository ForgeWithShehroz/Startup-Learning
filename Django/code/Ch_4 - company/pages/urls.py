from django.urls import path
from .views import *

urlpatterns = [
    path('about/', AboutPageView.as_view(), name="about"),
    path('', home_page_view, name="home"),
]

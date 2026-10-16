from django.urls import path
from . import views

app_name = 'vege'

urlpatterns = [
	path('', views.base, name='base'),
	path('recepies/', views.recepies, name='recepies'),
	path('recepies/<int:pk>/delete/', views.delete_recepie, name='delete_recepie'),
	path('update-recepie/<int:pk>/', views.update_recepie, name='update_recepie'),
	path('login/', views.login_page, name='login'),
	path('register/', views.register, name='register'),
	path('logout/', views.logout_page, name='logout')

]
# recipe
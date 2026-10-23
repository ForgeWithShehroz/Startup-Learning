from django.http import HttpResponse
from django.shortcuts import render 

# Create your views here.
def home_page_view(request):
	return HttpResponse("Homepage")

def about_page_view(request): # new
	context = {
	"name" : "Shehroz",
	"age" : 17,
	}
	return render(request, 'pages/about.html', context) # new
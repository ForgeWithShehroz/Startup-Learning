from django.shortcuts import render, redirect
from .models import Recepie
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages
from django.contrib.auth.decorators import login_required

# Create your views here.
@login_required(login_url='/login/')
def base(request):
	return render(request, 'vege/base.html') 

@login_required(login_url='/login/')
def recepies(request):
	context = {}
	if request.method == "POST":
		data = request.POST
		r_name = data.get('r_name')
		r_image = request.FILES.get('r_image')
		r_desc = data.get('r_desc')
	# 	Recepie.objects.create(
	    # user=request.user,
	    # r_image=r_image,
	    # r_name=r_name,
	    # r_desc=r_desc
		# )
		Recepie.objects.create(
			user=request.user,
			r_image=r_image,
			r_name=r_name,
			r_desc=r_desc
			)		

		return redirect("/recepies/")

		
		rs = Recepie.objects.all()
		search = request.GET.get('search')

		if search:
	  		rs = rs.filter(r_name__icontains=search)

		context = { 
			'rs' : rs,
			
		}

	return render(request, 'vege/recepies.html', context )


@login_required(login_url='/login/')
def delete_recepie(request, pk):
	# queryset = Recepie.objects.get(id = id)
	queryset = Recepie.objects.filter(pk = pk)
	queryset.delete()
	return redirect('/recepies/')

@login_required(login_url='/login/')
@login_required(login_url='/login/')
def update_recepie(request, pk):

    recepie = Recepie.objects.get(pk=pk)

    if request.method == "POST":

        r_name = request.POST.get('r_name')
        r_desc = request.POST.get('r_desc')
        r_image = request.FILES.get('r_image')

        recepie.r_name = r_name
        recepie.r_desc = r_desc

        if r_image:
            recepie.r_image = r_image

        recepie.save()

        return redirect('/recepies/')

    context = {'r': recepie}

    return render(request, 'vege/update_recepie.html', context)

def register(request):
	if request.method == "POST":
		first_name = request.POST.get('first_name')
		last_name = request.POST.get('last_name')
		username = request.POST.get('username')
		password = request.POST.get('password')

		user = User.objects.filter(username = username)

		if user.exists():
			messages.info(request, 'User Already Exists.') 
			return redirect('/register/')

		user = User.objects.create(
			first_name  = first_name,
			last_name = last_name,
			username = username,
			)

		user.set_password(password) 
		user.save()

		messages.info(request, "Account Created Successfully!")

		return redirect('/register')
	return render(request, 'vege/register.html')

def login_page(request):
	if request.method == "POST":
		username = request.POST.get('username')
		password = request.POST.get('password')

		if not User.objects.filter(username = username).exists():
			messages.error(request, "User doesn't exists!")
			return redirect('/login/')

		user = authenticate(username = username, password = password)
		if user is None:
			messages.error(request, "Invalid Password or Usename!")
			return redirect('/login/')

		else:
			login(request, user)
			return redirect('/recepies/')

	return render(request, 'vege/login.html')

@login_required(login_url='/login/')
def logout_page(request):
	logout(request)
	return redirect('/login/')
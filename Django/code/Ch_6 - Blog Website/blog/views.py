# from django.shortcuts import render, get_object_or_404
from django.views.generic import ListView, DetailView
from django.views.generic.edit import CreateView
from .models import Post

# Create your views here.

# def post_list(request):
#     posts = Post.objects.all()
#     return render(request, 'home.html', {'posts' : posts})

# def post_detail(request, pk):
#     post = get_object_or_404(Post, pk=pk)
#     return render(request, "post_detail.html", {"post" : post} )


""" Switching to generic class based views. """

class BlogListView(ListView):
    model = Post 
    template_name = "home.html"
    context_object_name = "posts" # Change the context object name to posts instead of post_list

class BlogDetailView(DetailView):
    model = Post
    template_name = "post_detail.html"

class BlogCreateView(CreateView):
    model = Post
    template_name = "post_new.html"
    fields = ['title', 'author', 'body', ]  
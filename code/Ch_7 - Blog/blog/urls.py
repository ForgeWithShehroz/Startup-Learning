from django.urls import path
from .views import (
    BlogDetailView,
    BlogListView,
    BlogCreateView,
    BlogUpdateView,
    BlogDeleteView
)
# from .views import post_list, post_detail

# urlpatterns = [
#     path("post/<int:pk>/", post_detail, name="post_detail"),
#     path('', post_list, name="home")
# ]

urlpatterns = [
    path('post/new', BlogCreateView.as_view(), name="post_new"),
    path("post/<int:pk>/",BlogDetailView.as_view() , name="post_detail"), 
    path("post/<int:pk>/edit",BlogUpdateView.as_view() , name="post_edit"), 
    path("post/<int:pk>/delete", BlogDeleteView.as_view(), name='post_delete'),
    path('', BlogListView.as_view(), name="home"),
]

# 184
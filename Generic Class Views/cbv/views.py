# from django.shortcuts import render
from django.views.generic.base import TemplateView
from cbv.models import Post

# Create your views here.
class Ex2View(TemplateView):
    """ TemplateResponseMixin
    Provides a mechanism to construct a TemplateResponse, given suitable context.
    Attributes:
    """

    template_name='ex2.html' # First Attributes      
    # template_engine= The NAME of the template engine to use for loading a template. (Jinja2, Genshi) # Other Attributes              
    # response_class = Custom template loading or custom context object instantiation # Other Attributes
    # content_type = Defailt Django uses 'text/html'. # Other Attributes


    """ get_context_data(**kwargs) is a method inherited from ContentMixin """
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['posts'] = Post.objects.get(id=1)
        context['data'] = 'Data Taken from the Ex2'
        return context

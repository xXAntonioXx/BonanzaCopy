from django.urls import path, re_path   
from . import views
from .views import ListPostView, ListPostByCategory



urlpatterns = [

     path('post/', ListPostView.as_view(), name="post-all"),
     re_path('^category/(?P<category>.+)/$', ListPostByCategory.as_view()),
]

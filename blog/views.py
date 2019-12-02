from django.shortcuts import redirect
from django.shortcuts import render
from django.utils import timezone
from .models import Category, Post
from django.shortcuts import render, get_object_or_404
from .forms import PostForm
from django.views.generic import TemplateView
#this is for the rest API
from .serializer import PostSerializer
from rest_framework import generics

def post_list(request):
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('-published_date')
    return render(request, 'blog/post_list.html', {'posts': posts})

def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'blog/post_detail.html', {'post': post})

def post_category(request):
    return render(request, 'blog/not_found.html')

def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST, request.FILES or None)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'blog/post_edit.html', {'form': form})

def post_edit(request, pk):
    post = get_object_or_404(Post, pk=pk)
    if request.method == "POST":
        form = PostForm(request.POST, instance=post)
        if form.is_valid():
            post = form.save(commit=False)
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm(instance=post)
    return render(request, 'blog/post_edit.html', {'form': form})


class HomePageView(TemplateView):
    template_name = 'home_page.html'


class ListPostView(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class ListPostByCategory(generics.ListAPIView):
    """
    Provides a get method handler.
    """
    queryset = Post.objects.all()
    serializer_class = PostSerializer

    def get_queryset(self):
        """
        This returns only the posts with the 
        category that is asked for
        """
        cat = self.kwargs['category']
        return Post.objects.filter(category=cat)

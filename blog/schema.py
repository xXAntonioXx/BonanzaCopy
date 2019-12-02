import graphene

from graphene_django.types import DjangoObjectType

from .models import Post, Category


class PostType (DjangoObjectType):
    class Meta:
        model = Post


class Query(object):
    all_posts = graphene.List(PostType)

    def resolve_all_posts(self,context):
        return Post.objects.all()
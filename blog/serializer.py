from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        #This is the data the serializer will parse ant show in the API
        fields = ("id", "title", "price", "image", "category")
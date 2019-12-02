from django.test import TestCase

# Create your tests here.
from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from rest_framework.views import status
from .models import Post
from .serializer import PostSerializer

# tests for views


class BaseViewTest(APITestCase):
    client = APIClient()

    @staticmethod
    def create_post(title="", price="", image=""):
        if title != "" and price != "" and image != "":
            Post.objects.create(title=title, price=price, image=image)

    def setUp(self):
        # add test data
        self.create_post("like glue", "2", None)
        self.create_post("simple post", "234", None)
        self.create_post("love is wicked", "76", None)
        self.create_post("jam rock", "967", None)


class GetAllPostsTest(BaseViewTest):

    def test_get_all_Posts(self):
        """
        This test ensures that all posts added in the setUp method
        exist when we make a GET request to the posts/ endpoint
        """
        # hit the API endpoint
        response = self.client.get(
            reverse("post-all", kwargs={"version": "v1"})
        )
        # fetch the data from db
        expected = Post.objects.all()
        serialized = PostSerializer(expected, many=True)
        self.assertEqual(response.data, serialized.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
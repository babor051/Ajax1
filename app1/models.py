from django.db import models
from rest_framework import serializers

# Create your models here.
class Book(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    pages = models.IntegerField()

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    password = models.CharField(max_length=100)


class BookSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    price = serializers.IntegerField()
    pages = serializers.IntegerField()
    id = serializers.IntegerField()
    
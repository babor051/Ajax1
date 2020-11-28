from django.contrib import admin
from django.urls import path, include
from . import views;

urlpatterns = [
    path('', views.index, name="index"),
    path('save_book/', views.saveBook, name="savebook"),
    path('getAllBooks/', views.getAllBooks, name="getallbooks"),
    path('deletebook/', views.deleteBook, name="delete"),
    path('signuppage/', views.showSignupPage, name="signupPage"),
    path('signup/', views.signup, name="signup"),
    path('checkemail/', views.checkEmail, name="checkemail"),
]

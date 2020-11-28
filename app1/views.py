from django.shortcuts import render
from django.http import HttpResponse
from .models import Book, User, BookSerializer
import json

# Create your views here.


def index(request):
    return render(request, "index.html")


def saveBook(request):
    name = request.GET['name']
    price = request.GET['price']
    pgs = request.GET['pages']

    print(name, price, pgs)

    book = Book(name=name, price=price, pages=pgs)
    try:
        book.save()
        return HttpResponse('true')
    except:
        return HttpResponse('false')


def getAllBooks(request):
    print('get all books function')
    l = list()
    books = Book.objects.all()
    for bk in books:
        ser = BookSerializer(bk)
        l.append(ser.data)
        # print(ser.data)
    print(l)
    return HttpResponse(json.dumps(l))


def deleteBook(request):
    try:
        print('id', request.GET['id'])
        book = Book.objects.get(id=request.GET['id'])
        book.delete()
        return HttpResponse('true')
    except:
        return HttpResponse('false')


def showSignupPage(request):
    return render(request, "signup.html")


def signup(request):
    name = request.GET['name']
    email = request.GET['email']
    password = request.GET['password']
    print(name, email, password)
    user = User(name=name, email=email, password=password)
    user.save()
    return HttpResponse('true')


def checkEmail(request):
    tryingEmail = request.GET['email']
    try:
        User.objects.get(email=tryingEmail)
        return HttpResponse('true')
    except:
        return HttpResponse('false')

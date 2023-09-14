from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets

from .serializers import cameraSerializer

from .models import cameras

from subprocess import Popen

class cameraView(viewsets.ModelViewSet):

	serializer_class = cameraSerializer

	queryset = cameras.objects.all()
 
 
def index(request):
    return render(request, 'index.html')


def Launch(request):
    if request.method == "GET":
        Popen("python Monitor.py")
        return HttpResponse(""" <html><script>window.location.replace('/');</script></html> """) #reloads the page
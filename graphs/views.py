from django.shortcuts import render

from graphs.models import Medition

# Create your views here.
def index(request):
    return render(request, 'graphs/index.html')


def meditions(request):
    meditions = Medition.objects.all()
    return render(request, 'graphs/meditions.html', {'meditions': meditions})

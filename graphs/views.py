from django.shortcuts import render

from graphs.models import Medition

# Create your views here.
def index(request):
    return render(request, 'graphs/index.html')


def meditions(request):
    meditions = Medition.objects.all()
    return render(request, 'graphs/meditions.html', {'meditions': meditions})


def altitude_graph(request):
    altitudes = Medition.objects.values_list('altitude', flat=True)
    x_axe = []
    for i in range(len(altitudes)):
        x_axe.append(i)

    return render(request, 'graphs/altitude_graph.html', {'altitudes': list(altitudes), 'x_axe': x_axe})

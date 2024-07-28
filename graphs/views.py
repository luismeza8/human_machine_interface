from django.http import HttpResponse
from django.shortcuts import render

from graphs.models import Medition

def index(request):
    template = 'graphs/index.html' if request.htmx else 'graphs/index_full.html'
    return render(request, template)


def atmosfera(request):
    template = 'graphs/atmosfera.html' if request.htmx else 'graphs/atmosfera_full.html'
    return render(request, template)


def estructura(request):
    template = 'graphs/estructura.html' if request.htmx else 'graphs/estructura_full.html'
    return render(request, template)


def mensajeria(request):
    template = 'graphs/mensajeria.html' if request.htmx else 'graphs/mensajeria_full.html'
    return render(request, template)


def medition(request):
    if request.method == 'GET':
        medition = Medition()
        medition.medition = request.GET.get('medition')
        medition.time = request.GET.get('time')
        medition.altitude = request.GET.get('altitude')
        medition.temperature = request.GET.get('temperature')
        medition.pressure = request.GET.get('pressure')
        medition.aceleration_x = request.GET.get('aceleration_x')
        medition.aceleration_y = request.GET.get('aceleration_y')
        medition.aceleration_z = request.GET.get('aceleration_z')
        medition.gyro_x = request.GET.get('gyro_x')
        medition.gyro_y = request.GET.get('gyro_y')
        medition.gyro_z = request.GET.get('gyro_z')
        medition.battery = request.GET.get('battery')

        medition.save()
        return HttpResponse('Medition saved.')

    return HttpResponse('yepa')


def meditions(request):
    meditions = Medition.objects.all()
    return render(request, 'graphs/meditions.html', {'meditions': meditions})


def altitude_graph(request):
    altitudes = Medition.objects.values_list('altitude', flat=True)
    x_axe = []
    for i in range(len(altitudes)):
        x_axe.append(i)

    return render(request, 'graphs/altitude_graph.html', {'altitudes': list(altitudes), 'x_axe': x_axe})

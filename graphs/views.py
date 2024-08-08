from django.http import HttpResponse
from django.shortcuts import render

from graphs.models import Medition

def index(request):
    return render(request, 'graphs/base.html')


def tests(request):
    return render(request, 'graphs/tests/view.html')


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

    return HttpResponse('POST is not allow.')


def meditions(request):
    meditions = Medition.objects.all()
    return render(request, 'graphs/meditions.html', {'meditions': meditions})


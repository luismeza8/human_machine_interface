from django.urls import path


from .consumers import *

ws_urlpatterns = [
    path('ws/altitude/', AltitudeConsumer.as_asgi()),
    path('ws/temperature/', TemperatureConsumer.as_asgi()),
    path('ws/pressure/', PressureConsumer.as_asgi()),
    path('ws/acelerations/', AcelerationsConsumer.as_asgi()),
    path('ws/gyros/', GyrosConsumer.as_asgi()),
    path('ws/battery/', BatteryConsumer.as_asgi()),
]

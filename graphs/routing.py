from django.urls import path


from .consumers import *

ws_urlpatterns = [
    path('ws/pocketqube/', PocketQubeConsumer.as_asgi()),
]

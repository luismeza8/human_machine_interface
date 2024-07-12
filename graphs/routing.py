from django.urls import path


from .consumers import *

ws_urlpatterns = [
    path(r'ws/graph/', GraphConsumer.as_asgi())
]

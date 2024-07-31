from django.urls import path

from . import views

urlpatterns = [
    path('pocketqube/', views.index, name='index'),
    path('medition', views.medition, name='medition'),
]

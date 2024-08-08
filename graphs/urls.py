from django.urls import path

from . import views

urlpatterns = [
    path('pocketqube/', views.index, name='index'),
    path('tests/', views.tests, name='tests'),
    path('medition', views.medition, name='medition'),
]

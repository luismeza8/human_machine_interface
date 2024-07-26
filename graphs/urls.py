from django.urls import path

from . import views

urlpatterns = [
    path('pocketqube/general/', views.index, name='index'),
    path('pocketqube/atmosfera/', views.atmosfera, name='atmosfera'),
    path('medition', views.medition, name='medition'),
]

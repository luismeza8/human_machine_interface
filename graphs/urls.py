from django.urls import path

from . import views

urlpatterns = [
    path('pocketqube/general/', views.index, name='index'),
    path('pocketqube/atmosfera/', views.atmosfera, name='atmosfera'),
    path('pocketqube/estructura/', views.estructura, name='estructura'),
    path('pocketqube/mensajeria/', views.mensajeria, name='mensajeria'),
    path('medition', views.medition, name='medition'),
]

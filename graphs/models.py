from django.db import models

# Create your models here.
class Medition(models.Model):
    altitude = models.IntegerField()
    temperature = models.IntegerField()
    battery = models.IntegerField()


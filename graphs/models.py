from django.db import models

# Create your models here.
class Medition(models.Model):
    medition = models.IntegerField(default=0)
    time = models.IntegerField(default=0)
    altitude = models.FloatField(default=0.0)
    temperature = models.FloatField(default=0.0)
    pressure = models.FloatField(default=0.0)
    aceleration_x = models.FloatField(default=0.0)
    aceleration_y = models.FloatField(default=0.0)
    aceleration_z = models.FloatField(default=0.0)
    gyro_x = models.FloatField(default=0.0)
    gyro_y = models.FloatField(default=0.0)
    gyro_z = models.FloatField(default=0.0)

    battery = models.IntegerField()


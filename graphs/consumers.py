from asyncio import sleep
import json

from channels.generic.websocket import AsyncWebsocketConsumer

from graphs.models import Medition

class PocketQubeConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        last_medition = 0

        while True:
            medition = await Medition.objects.alast()
            if last_medition != medition.medition:
                data = {
                    'medition': medition.medition,
                    'altitude': medition.altitude,
                    'temperature': medition.temperature,
                    'pressure': medition.pressure,
                    'aceleration_x': medition.aceleration_x,
                    'aceleration_y': medition.aceleration_y,
                    'aceleration_z': medition.aceleration_z,
                    'gyro_x': medition.gyro_x,
                    'gyro_y': medition.gyro_y,
                    'gyro_z': medition.gyro_z,
                    'battery': medition.battery,
                }
                await self.send(json.dumps(data))
                last_medition = medition.medition
            await sleep(0.2)


class AltitudeConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        last_medition = 0

        while True:
            medition = await Medition.objects.alast()
            if last_medition != medition.medition:
                await self.send(json.dumps({'medition': medition.medition, 'altitude': medition.altitude}))
                last_medition = medition.medition
            await sleep(0.2)



class TemperatureConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        last_medition = 0

        while True:
            medition = await Medition.objects.alast()
            if last_medition != medition.medition:
                await self.send(json.dumps({'medition': medition.medition, 'temperature': medition.temperature}))
                last_medition = medition.medition
            await sleep(0.2)


class PressureConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        last_medition = 0

        while True:
            medition = await Medition.objects.alast()
            if last_medition != medition.medition:
                await self.send(json.dumps({'medition': medition.medition, 'pressure': medition.pressure}))
                last_medition = medition.medition
            await sleep(0.2)


class AcelerationsConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        last_medition = 0

        while True:
            medition = await Medition.objects.alast()
            if last_medition != medition.medition:
                await self.send(json.dumps(
                    {
                        'medition': medition.medition,
                        'x': medition.aceleration_x,
                        'y': medition.aceleration_y,
                        'z': medition.aceleration_z,
                    }
                ))
                last_medition = medition.medition
            await sleep(0.2)


class GyrosConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        last_medition = 0

        while True:
            medition = await Medition.objects.alast()
            if last_medition != medition.medition:
                await self.send(json.dumps(
                    {
                        'medition': medition.medition,
                        'x': medition.gyro_x,
                        'y': medition.gyro_y,
                        'z': medition.gyro_z,
                    }
                ))
                last_medition = medition.medition
            await sleep(0.2)

            
class BatteryConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()
        last_medition = 0

        while True:
            medition = await Medition.objects.alast()
            if last_medition != medition.medition:
                await self.send(json.dumps({'medition': medition.medition, 'battery': medition.battery}))
                last_medition = medition.medition
            await sleep(0.2)

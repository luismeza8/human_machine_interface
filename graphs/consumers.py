import json
from asyncio import sleep
from random import randint

from channels.generic.websocket import AsyncWebsocketConsumer


class AltitudeConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        for i in range(10000):
            await self.send(json.dumps({'medition': i, 'altitude': randint(0, 500)}))
            await sleep(0.2)


class TemperatureConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        for i in range(10000):
            await self.send(json.dumps({'medition': i, 'temperature': randint(0, 45)}))
            await sleep(0.2)


class BatteryConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.accept()

        for i in range(10000):
            await self.send(json.dumps({'medition': i, 'battery': randint(0, 100)}))
            await sleep(0.2)

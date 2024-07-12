import json
from time import sleep
from random import randint

from channels.generic.websocket import WebsocketConsumer



class GraphConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

        for _ in range(1000):
            self.send(json.dumps({'value': randint(-20, 20)}))
            sleep(0.5)

import json
from time import sleep
from random import randint

from channels.generic.websocket import WebsocketConsumer


class GraphConsumer(WebsocketConsumer):
    def connect(self):
        self.accept()

        for i in range(10000):
            self.send(
                json.dumps(
                    {
                        'medition': i,
                        'value': randint(0, 500)
                    }
                )
            )
            sleep(0.2)

#!/usr/bin/env python3
import random
import requests
from datetime import datetime, timedelta
import time

# === CONFIG ===
ENDPOINT = "http://127.0.0.1:8000/medition"  # your Django view URL
NUM_SAMPLES = 50

# === SIMULATION ===
start_time = datetime.now()
altitude = 0.0
velocity = 0.0
battery = 100.0

for i in range(NUM_SAMPLES):
    # simple rocket physics for the first seconds of launch
    time_s = i
    acceleration = 9.8 + random.uniform(-1, 2)     # m/s² around thrust - gravity
    velocity += acceleration                       # integrate velocity
    altitude += velocity                           # integrate altitude
    pressure = max(1013 - altitude * 0.12, 100)    # lower with altitude
    temperature = 25 - altitude * 0.002            # slightly cooler as it rises
    battery -= random.uniform(0.05, 0.1)           # slow drain

    # small random noise
    acx = acceleration + random.uniform(-0.5, 0.5)
    acy = random.uniform(-0.2, 0.2)
    acz = random.uniform(-0.5, 0.5)
    gyx = random.uniform(-2, 2)
    gyy = random.uniform(-2, 2)
    gyz = random.uniform(-2, 2)

    params = {
        "medition": i,
        "time": i,
        "altitude": round(altitude, 2),
        "temperature": round(temperature, 2),
        "pressure": round(pressure, 2),
        "aceleration_x": round(acx, 2),
        "aceleration_y": round(acy, 2),
        "aceleration_z": round(acz, 2),
        "gyro_x": round(gyx, 2),
        "gyro_y": round(gyy, 2),
        "gyro_z": round(gyz, 2),
        "battery": int(battery),
    }

    try:
        r = requests.get(ENDPOINT, params=params)
        print(f"[{i+1}] Sent medition → {r.status_code} {r.reason}")
    except Exception as e:
        print(f"[{i+1}] Error: {e}")

    time.sleep(0.2)


import cv2
import threading
import requests
import json
from tkinter import *
from tkinter.ttk import *
import customtkinter as ctk
import time
from plyer import notification


face_cascade = cv2.CascadeClassifier(
    "haarcascade_frontalface_default.xml"
)  # xml file of the detection model

response = requests.get(
    "http://127.0.0.1:8000/api/cameras/"
)  # the api to get the  cameras

jdata = json.loads(response.text)  # change the json to list of dictionaries

cameras = []
for d in jdata:
    cameras.append(d["name"])

cameras_address = {}

for d in jdata:
    cameras_address[d["name"]] = d["ip_address"] + "/video"


root = ctk.CTk()

root.geometry("400x500")

root.resizable(height=None, width=None)
root.title("Monitor")


class camThread(threading.Thread):
    def __init__(self, name, ip):
        threading.Thread.__init__(self)
        self.name = name
        self.ip = ip

    def run(self):
        print("staring : " + self.name + " monitoring")
        camMonitor(self.name, self.ip)


def camMonitor(name, ip):
    cv2.namedWindow(name)
    cam = cv2.VideoCapture(ip)
    if cam.isOpened():  # try to get the first frame
        rval, frame = cam.read()
    else:
        rval = False

    while rval:
        rval, frame = cam.read()
        gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
        faces = face_cascade.detectMultiScale(gray, 1.3, 5)

        if len(faces) > 0:
            notification.notify(
                title="PERSON DETECED",
                message=" PERSON DETECTED ON " + name + " CAMERA",
                # displaying time
                timeout=1,
            )
        key = cv2.waitKey(20)
        if key == 27:  # exit on esc
            break

    cv2.destroyAllWindows(name)


def start():
    print("hello")

    for thread in cameras_address:
        x = camThread(thread, cameras_address[thread])
        x.start()


titleLabel = ctk.CTkLabel(
    root, text="Cameras", font=ctk.CTkFont(size=30, weight="bold")
)
titleLabel.pack(padx=10, pady=(40, 20))

scrollableframe = ctk.CTkScrollableFrame(root, width=300, height=300)
scrollableframe.pack()

startButton = ctk.CTkButton(root, text="Start", width=250, command=start)
startButton.pack(pady=20)

for camera in cameras:
    label = ctk.CTkLabel(
        scrollableframe,
        text=camera,
        font=ctk.CTkFont(size=20),
    )
    label.pack(fill="x")

root.mainloop()

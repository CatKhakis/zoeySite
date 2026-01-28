Title: DISCARD architecture
Date: 2026-1-16
Day: 16
Month: January
Year: 2026
Tags: discard

{% from 'macros.html' import clean_break %}

## Scope

I cannot predict how complex the final DISCARD installation will be so the system needs to be incredibly robust. When the idea of this project was first formed I only expected to use about 6 CRT TVs, but I want the system to be able to support far more to avoid limitations when telling the story. Along with displays I want the system to be able to support lights, cameras, and possibly some input methods. Despite all the capability the devices cannot be too expensive. If the final project has 32 TVs and they each require a Raspberry Pi 5 I'd be spending upwards of $1,600 - $2,000 on just the computers alone.


## V1 receiver

<img class="smallImg" alt="Photo" src="/images/projects/DISCARD/IMG_6648.jpeg" >

[fix image to be inline]

The first DISCARD receiver was made back in 2022 with the intent of being super affordable, but that ended up being it's downfall. Using an ESP32 could have worked with enough effort and optimizations but it would be incredibly feature sparse. These were nothing more than dummy receivers that displayed the contents of a network packet on the display. They were incapable of any rendering or file storage, as all of that was done on the 'server', which was just a laptop that had to be left running. Thanks to bulk ordering, these could be assembled for less than $4 at scale, but with the Raspberry Pi Zero 2 W for sale at only $15 each it doesn't make sense to stick with the ESP32 based receiver. 


## Architecture test

Migrating the receiver from being microcontroller based to being linux based means that I can utilize websockets and WebGL. Non-platform native applications have garnered a bad reputation for being bloated and clunky, but this is not a fault of web browsers being bad, but rather deadlines requiring half-baked unoptimized software to be pushed out. Modern web browsers are **incredibly** powerful and **incredibly** lightweight if time is put into optimization.


### Server/Client
When properly installed the system will have a dedicated server but for development I am simply running the server on my laptop. I'm using [Express](https://expressjs.com) for the server and the [Vue templating engine](https://vuejs.org) for the front end. Each TV will have a Raspberry Pi Zero that will automatically connect to the site on launch where as the ```/admin``` endpoint will be accessible from a laptop to configure and script the setup.


#### Server

When a new client joins the url the server checks to see whether or not it has been assigned a UUID, and if it hasn't the server assigns one and starts a websocket connection. With this data a map representing the dimensions and location of each TV can be stored on the server.
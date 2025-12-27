Title: dashPuppy
Icon: satellite
Tags: Project
Template: project

{% from 'macros.html' import polaroid, clean_break %}
{% from 'macros/sections.html' import sectionStart, sectionEnd, body, side %}


Years back I saw Gene Bransfield's DEFCON talk about his [WarKitteh Project](https://www.hackster.io/neo-phreak-3/warkitteh-c298bf) where he made a collar for his cat that included a GPS and a microcontroller for logging wifi networks to an SD card. 

Inspired by Gene's work I wanted to put my own spin on it. This started out as the wifiSniffer but has now evolved into the far more capable **dashPuppy**.

{{ clean_break() }}

The first version of the dashPuppy consisted of an ESP32, GPS, SD card, and a small OLED display.

{{ clean_break() }}

# dashPuppy

![Photo]({attach}moderndashPuppy.jpeg)

Modern version of dashpuppy
Raspberry Pi 5

to handle the massive amount of data logged, the dashPuppy hosts a full MySQL Server for storing and displaying data along with a webserver that hosts the interface for viewing data. The first, lightweight microcontroller version had the advantage of being able to be turned off quickly, but the full Pi 5 requires a safe shutdown. To avoid data corruption the Pi sits on top of a Geekworm X1201 uninteruptable power supply board (UPS).

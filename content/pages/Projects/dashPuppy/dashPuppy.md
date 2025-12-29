Title: dashPuppy
Icon: satellite
Tags: Project
Template: project

{% from 'macros.html' import polaroid, clean_break %}
{% from 'macros/sections.html' import sectionStart, sectionEnd, body, side %}

![Photo](/images/projects/dashPuppy/moderndashPuppy.jpeg)

The dashPuppy is a full data logging linux system built to stay in my car at all times. This project started with the [dashPuppy early days]({{ SITEURL }}/2025/dashpuppy-early-days.html) in 2023 as a far more simple device for just logging GPS and nearby Wi-Fi networks.

Currently the dashPuppy is a far more capable system with a Raspberry Pi 5, UPS, CAN bus controller, and of course a GPS module. With this extra power it hosts a full MySQL server along with a website for viewing the data. Information on the hardware design of the current dashPuppy can be found here [dashPuppy hardware]({{ SITEURL }}/2025/dashpuppy-hardware.html) and a run through of the website can be found here [dashPuppy dataviewer]({{ SITEURL }}) (UPDATE LINK)
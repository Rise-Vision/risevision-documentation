---
layout: user-post
title:  "Chrome Player for Raspberry Pi 2"
date:   2014-10-13 10:52:00
category: user/player/chrome-app
order: 4
---


###Raspberry Pi 2
The Raspberry Pi 2 can make for a great media player to run basic content, including video support. The steps below show how to configure a Raspberry Pi 2 for the Rise Vision Chrome App running Ubuntu 14.10.

You can skip the process of manually configuring your Pi 2, per the instructions below, using a pre built image that can be downloaded from [here](https://s3.amazonaws.com/publicdownload/raspberrypi2.img.zip). Once downloaded, the image can be installed on the SD card for your Raspberry Pi 2 following the instructions [here](http://www.raspberrypi.org/documentation/installation/installing-images/README.md).

If you prefer to manually setup your Raspberry Pi 2, follow the directions below.

---

#####Download the Ubuntu 14.10 image and install it on your SD Card
1. The base Ubuntu 14.10 image used for this setup was created by a [Raspberry Pi Forum](http://www.raspberrypi.org/forums/viewtopic.php?f=56&t=98997) contributor that can be downloaded from [here](http://lucario.info/archive/raspuntu-tjc-2015-02-16.zip).
2. Once you’ve downloaded the image, install it onto your Raspberry Pi 2 SD Card following the instructions [here](http://www.raspberrypi.org/documentation/installation/installing-images/README.md).
3. When the SD Card is ready, install it into your Raspberry Pi 2 and turn it on. The default username and password is linaro:linaro

#####Check for Ubuntu updates
1. From Terminal, execute the following two commands to get the latest Ubuntu updates:
	- `sudo apt-get update`
	- `sudo apt-get upgrade`

#####Install unclutter
Unclutter is an application that will hide the mouse pointer so it does not appear over a running Presentation. To install it, execute the following command in Terminal:

1. `sudo apt-get install unclutter`

#####Configure sound & disabling overscan: 
These configuration steps assumes that standard HDMI output will be used. These steps will configure the audio so that it uses the HDMI output and overscan is disabled. Disabling overscan is optional.

1. From Terminal, type the following command to edit /boot/config.txt
2. `sudo leafpad /boot/config.txt`
3. Un-comment "hdmi_drive=2" from the file. The contents should look like this after the edit:

```
# For more options and information see 
# http://www.raspberrypi.org/documentation/configuration/config-txt.md
# Some settings may impact device functionality. See link above for details

# uncomment if you get no picture on HDMI for a default "safe" mode
#hdmi_safe=1

# uncomment this if your display has a black border of unused pixels visible
# and your display can output without overscan
disable_overscan=1

# uncomment the following to adjust overscan. Use positive numbers if console
# goes off screen, and negative if there is too much border
#overscan_left=16
#overscan_right=16
#overscan_top=16
#overscan_bottom=16

# uncomment to force a console size. By default it will be display's size minus
# overscan.
#framebuffer_width=1280
#framebuffer_height=720

# uncomment if hdmi display is not detected and composite is being output
#hdmi_force_hotplug=1

# uncomment to force a specific HDMI mode (this will force VGA)
#hdmi_group=1
#hdmi_mode=1

# uncomment to force a HDMI mode rather than DVI. This can make audio work in
# DMT (computer monitor) modes
hdmi_drive=2

# uncomment to increase signal to HDMI, if you have interference, blanking, or
# no display
#config_hdmi_boost=4

# uncomment for composite PAL
#sdtv_mode=2

#uncomment to overclock the arm. 700 MHz is the default.
#arm_freq=800
```

#####Install Rise Chrome App & configure it to autostart
1. Open Chromium, navigate to the [Rise Vision Chrome App Player](https://chrome.google.com/webstore/detail/rise-vision-chrome-app-pl/mfpgpdablffhbfofnhlpgmokokbahooi) in the Chrome Store, and install.
2. Right click on the new icon and select "Create Shortcuts". Ensure Desktop is checked and click Create.
3. Configure the Rise Vision Chrome App Player to auto start by typing the following commands in Terminal:
	- `mkdir ~/.config/autostart`
	- `cp ~/Desktop/chrome-*.desktop ~/.config/autostart/`

#####Configure Ubuntu to auto login
1. From Terminal, type the following command to edit /etc/lxdm/lxdm.conf
2. `sudo leafpad /etc/lxdm/lxdm.conf`
3. Edit the file to look like this (save and closing when done):

```
[base]
autologin=linaro
```

#####Disable screen timeout:
- Create new file in home folder name disable_screen_timeout.sh by typing the following in Terminal:
- `leafpad /home/linaro/disable_screen_timeout.sh`
- Then put the following in the text file:

```
#!/bin/sh
xset s off
xset s noblank
xset -dpms
```
- Make this executable by typing the following command:
- `chmod +x /home/linaro/disable_screen_timeout.sh`
- Then create another text file with the following command:
- ` sudo leafpad /usr/share/applications/disable_screen_timeout.desktop`
- And fill it in with this:

```
[Desktop Entry]
Name=Disable Screen Timeout
Exec=/home/linaro/disable_screen_timeout.sh
Type=Application
Terminal=false
```
- Add the file to the startup applications by executing this command:
- `cp /usr/share/applications/disable_screen_timeout.desktop /home/linaro/.config/autostart`

---
layout: user-post
title:  "Rise Vision Native Player"
date:   2016-06-17 10:31:00
category: user/advanced/display
order: 5
---


**Please note that not all Rise Vision features are supported on the Native Player. The [Rise Vision Chrome App Player](user/create-a-display) is recommended.**


The Rise Vision Player is the software that must be installed on the computer portion of your display in order to be able to show content from the Rise Vision platform.  It’s the software that takes the presentations and schedules that you create in the platform and sends them to your display screen.

The word “player” is also used in the term “media player”, which refers to the computer portion of your display, i.e., to the device that connects to and powers your digital sign.   But in general, when we talk about the Player, we’re referring to the software.


##Windows Native Player Optimization Guide

This document applies to Windows 8.1 32bit

###Where Can I Download Player?
To download the Native Player software for Windows 8.1, click [here](https://rvaserver2.appspot.com/player/download?os=win).

###Turn Screensaver Off
1. From Control Panel select **Appearance and Personalization**
2. Select **Change Screen Saver** and set **Screensaver as (None)**. Save the change.

###Configure Power Options
1. From Control Panel select **System and Security** 
2. Select **Power Options** and update to use the **High performance** plan
3. Select **Change plan settings** to the right of the High performance plan title
4. From the **High performance settings** page, update the options per the below. Settings not shown can remain as the default
5. Set Hard disk > Turn off hard disk after to *0*
6. Set Display > Turn off display after to *0*

###Disable Scaling
1. Right click the Chrome Browser shortcut and select **Properties** then select the **Compatibility** tab 
2. Uncheck **Disable scaling on high DPI** and select **OK**

###Disable Windows Security Alerts
1. From Control Panel select **System and Security**
2. Select **Action Center**
3. In the left pane, select **Change Action Center Settings**
4. **Uncheck** all fields under **Security Messages** and **Maintenance Messages**

##Linux Native Player Optimization Guide

This document applies to Ubuntu 14.04 32bit

###Where Can I Download Player?
To download the Native Player software for Ubuntu 14.04, click [here](https://rvaserver2.appspot.com/player/download?os=lnx).

###Disable Power Save
1. Click the settings cog in the taskbar and select **System Settings**
2. Select **Brightness & Lock**
3. Change **Turn screen on when inactive** for to *Never*
4. Turn **Lock** off
5. Click **All Settings**
6. Select **Power**
7. Change **Suspend when inactive** for to *Don’t Suspend*

###Disable System Updates Notifications
1. Open **terminal**
2. Type 
```
sudo mv /usr/bin/update-notifier /usr/bin/update-notifier.real
```
3. Type 
```
sudo gedit /asr/bin/update-notifier
```
4. Add two lines to this document 
	* #!/bin/sh 
	* exit 0
5. **Save** and exit the document
6. In terminal type 
```
sudo chmod +x /usr/bin/update-notifier
```

###Disable Apport
1. Open **Terminal**
2. Type 
```
sudo gedit /etc/default/apport
```
3. Edit the last line in the document to read *enabled=0*
4. **Save** and exit

###Configure a Scheduled Reboot
1. Open **Terminal**
2. Type 
```
sudo gedit /etc/crontab
```
3. At the bottom, type 
```
0 3 * * * root /sbin/shutdown -r now
```
4. **Save** and exit

###Installing on Ubuntu 14.04 32 Bit
1. Download the Rise Vision Native Player software [here](https://rvaserver2.appspot.com/player/download?os=lnx)
2. Install the following packages by typing the following into a Terminal window:
	* sudo apt-get install (package name)
	* openjdk-7-jre
	* at
	* libudev1
	* libxss1
3. Navigate to this folder by typing the following into a Terminal window: cd /lib/i386-linux-gnu.
4. Run the following command: sudo ln -s libudev.so.1 libudev.so.0.
5. Make the installation file executable by typing the following into a Terminal window: chmod a+x rvplayer-installer.sh. If that does not work for any reason, change the configuration for how to treat executable text files like this: Open Files and go into the Preferences (from the menu at the top of the screen). Once there, go to the Behavior tab and update the Executable Text Files section to “Ask each time.
6. Run the executable in Terminal, but DO NOT use sudo.
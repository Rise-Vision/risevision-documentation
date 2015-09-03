---
layout: user-post
title:  "Rise Linux Player Ubuntu Optimization Guide"
date:   2015-09-03 10:52:00
category: user/advanced/display
order: 1
---
We support Ubuntu 14.04.

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
sudo gedit /usr/bin/update-notifier
```
4. Add two lines to this document 
	* .#!/bin/sh 
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
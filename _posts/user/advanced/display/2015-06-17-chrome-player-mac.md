---
layout: user-post
title:  "Mac OS X Optimization Guide"
date:   2015-06-16 10:52:00
category: user/advanced/display
order: 3
---
We support OS X 10.10 running the latest stable version of Chrome

###Disable Screensaver
1. Open **System Preferences**
2. Select **Desktop & Screen Saver**
3. Select the **Screen Saver tab**
4. Change **Start after:** to *Never*

###Disable Power Save 
1. Open **System Preferences**
2. Select **Energy Saver**
3. Slide the **Turn off display after:** value to *Never*
4. Uncheck **Put hard disks to sleep when possible**

###Turn on Do Not Disturb
1. Open **System Preferences**
2. Select **Notifications**
3. Select **Do Not Disturb**
4. Select **From:** and configure to **From: 12:00AM to: 11:59PM**

###Configure a Scheduled Reboot
1. Open **System Preferences**
2. Select **Energy Saver**
3. Select **Schedule**
 	* Select the checkbox next to Sleep
	* Change the first box to Restart
	* Change the second box to Every Day
	* Set your preferred reboot time. We recommend 3 AM.

###Configure a Watchdog Script to Open Rise Player if it Closes
1. Open a text editor and past the following text into it
```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.risevision.player</string>
    <key>ProgramArguments</key>
        <array>
            <!-- the following line will need to be changed to reflect the correct path and profile name/id -->
            <string>/Users/**your username**/Applications/Chrome Apps.localized/**your profile** mfpgpdablffhbfofnhlpgmokokbahooi.app/Contents/MacOS/app_mode_loader</string>
        </array>
    <key>RunAtLoad</key>
    <true/>
    <key>KeepAlive</key>
    <true/>
</dict>
</plist>
```
2. Replace **your username** with your username
3. Replace **your profile** with your profile
4. Save text document, you can name it whatever you wish.
5. Move document to /Users/**your username**/Library/LaunchAgents

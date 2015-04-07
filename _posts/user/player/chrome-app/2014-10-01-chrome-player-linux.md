---
layout: user-post
title:  "Chrome Player for Linux"
date:   2014-10-13 10:52:00
category: user/player/chrome-app
order: 2
---

#####Install Chrome App Player
1. Using Google Chrome, install the Rise Vision Chrome App Player from www.risevision.com/player


#####Configure the Chrome App Player to auto start
1. Open a new Tab in Google Chrome, and browse to chrome://apps. Right click on the Rise Vision Chrome App Player, and select Create Shortcuts. Create a Shortcut for the Desktop.
2. From the Dash search button, search for Startup Applications, and open it. Drag the Desktop shortcut into the Startup Applications window, and restart your Display. The Rise Vision Chrome App Player will start automatically.


#####Configure a scheduled reboot
1. Open terminal
2. Type sudo crontab -e
3. Select your editor
4. At the bottom, type 0 3 * * * root /sbin/shutdown -r now
5. This will reboot your player at 3AM. I fyou would like to reboot at a different time, simply replace that with the hour you would prefer.
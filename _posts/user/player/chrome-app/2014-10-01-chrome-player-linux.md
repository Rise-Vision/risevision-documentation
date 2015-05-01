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
2. Type sudo gedit /etc/crontab
3. At the bottom, type 0 3 * * * root /sbin/shutdown -r now
4. Save and exit.
5. This will reboot your player at 3AM. If you would like to reboot at a different time, simply replace that with the hour you would prefer.

#####Chrome App Player (first run)
When the Player is launched for the first time you will be warned that the Display ID is not found.

You will need a uniqe ID for each player in your company. This ID can be obtained by clicking on the Displays link from within the [RVA interface,](http://rva.risevision.com/) and clicking on an existing Display (if replacing one) or the "Add Display" button (if adding a new one). More information can be found [here.](http://help.risevision.com/#/user/player/register-player)

You assign this ID by clicking on the "Enter Display ID" button and entering the sequence obtained from RVA Displays, mentioned above.

#####Supported Versions
Rise Vision can only support the latest Stable Channel releases of Google Chrome. We do not reccommend running Chrome App Player on the Beta or Development channels.
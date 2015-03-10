---
layout: user-post
title:  "Add a Display"
date:   2014-10-13 10:52:00
category: user/display
order: 2
---

To create a display in the Rise Vision platform;

1. Within Rise Vision, click the “Displays” link at the top of any page
2. Then click the “Add Display” button in the top right corner of the page.
3. Give your display a name and click the Save button.

Once saved, a Display ID is generated and will be shown on the dipslay settings page. This ID used to uniquly identify a Display.

If this is the first time you’re adding a display to the platform, a message will appear in red saying “Warning: No Player software is installed on the Display”. This is simply a reminder that Rise Vision Player application must be installed on the computer that’s connected to your display.

####Install Player
What is Rise Vision Player?

Player is the application that you install on your computer or media player in order to play presentations on your displays.

To install Player, navigate to http://www.risevision.com/player and select the Rise Vision Player application download link appropriate for your media player.

To assign a Display ID to a display;

1. Start the Rise Vision Player application
2. Click the "Enter Display ID" button and enter the Display ID for the display created on the Displays page in the Rise Vision Platform
3. Click on the "Apply" button. The Player application will restart and begin to Play the presentation that has been defined according its Schedule.

###Display Settings
**Status:**  In this field, the default status for new displays is Active, but you have the option to make it Inactive if necessary.  

Next to the Status field, the color of the Heartbeat (heart) icon indicates the current state of the display: green for Online,  red for Offline, and black for Not Installed (meaning that no Player software is installed on the display yet).

Next to the Heartbeat icon, the Last Update Time is shown.  If the display state is Online, it shows the last time the display’s content was updated.  If the display state is Offline, it shows the time that the system detected the disconnection.  If the display state is Not Installed, no time is shown.

**Display Resolution:**  The default value of 1920×1080 is shown in this field when you first add a new display, but if the actual size of the screen is different, Rise Player will detect and show the correct resolution when it starts on the display.

**Display Address:**  If you uncheck the box for Use Company Address, you can enter the details of the location of this display.  This address will be used by any widgets that send location-specific data to the display.

**Display ID:**  This is the unique ID assigned by the platform to your display.  You use it to identify this display in any playlists and presentations that include it.

**Download Player:**  Clicking this button this takes you to http://www.risevision.com/player, where you can download the Rise Vision Player installation file for your display computer’s operating system.

**Restart Player:**  Clicking this button while the display is running will cause the presentation currently being displayed to close and start again.  This is useful if you want to update your presentation’s content or settings right away, rather than waiting for the next Scheduled Reboot time (see below).  Restarting the Player clears the Player cache, but not the Rise cache (where videos are stored).   It also causes all widgets, images and Player Browser settings to be downloaded again, as long as the Internet is available. 

If Player has not been installed on this display, this option will not be available and the message “Warning: No Player software is installed on the Display” will show in red.  

**Reboot Computer:**  Clicking this button while the display is running will restart the display.  A message appears at the top of the current presentation to say that the display is restarting.  Unlike the Restart Player option, this option does not clear the Player cache. 

If Player has not been installed on this display, this option will not be available and the message “Warning: No Player software is installed on the Display” will show in red.  

**Scheduled Reboot:**  In this field you can specify the time of day that you would like Player to reboot your display and perform its daily maintenance.

**Monitor:**  Check this field if you would like email notifications to be sent whenever this display fails and recovers.  Notifications will be sent to all addresses listed in the Monitoring Emails field of your Settings page.

**Operating System:**  This shows the name and version of the operating system used by the computer connected to this display.

**Player Version:**  This shows the version of the Rise Vision Player software used by this display.

**Viewer Version:**  This shows the version of Viewer, an application that is responsible for dynamically changing the content based on the schedule and presentation(s) it receives from Rise Vision Core.

**Player Browser:**  This field lets you control the version of the browser (Chrome for Windows, Chromium for Linux) that is used by Player to show your content on your displays.  For all new displays, this is set to Auto Upgrade by default.  Once Player is installed and running, you can change this setting to one of the following: Current, which will keep the browser on the current version Previous, which will use the last supported version of the browser, or User Managed, which lets you pick your own browser version. 

**Installed Browser:**  Once Player is installed and running, this field shows the version of Chrome (Windows) or Chromium (Linux) that is being used by Player to show your content on this display.

**Display Errors:**  This field’s table shows the date, code and description of any errors that have occurred during the online operation of this display.


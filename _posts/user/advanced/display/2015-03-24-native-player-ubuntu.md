---
layout: user-post
title:  "Native Player on Ubuntu"
date:   2015-06-17 10:52:00
category: user/advanced/display
order: 8
---

The Rise Vision Player is the software that must be installed on the computer portion of your display in order to be able to show content from the Rise Vision platform.  It’s the software that takes the presentations and schedules that you create in the platform and sends them to your display screen.

The word “player” is also used in the term “media player”, which refers to the computer portion of your display, i.e., to the device that connects to and powers your digital sign.   But in general, when we talk about the Player, we’re referring to the software.


###Where can I download Player?
To download the Player software, go to http://www.risevision.com/player/ and select the version made for the operating system used by your display’s computer/media player. 

###Linux Native Player Optimization Guide
This help page outlines the recommended Linux OS settings to optimize the performance of your digital signage Display.Before you begin, determine which hardware is best suited for your Display, depending on your Presentation type. For this you may want to check out our Community Forum, or contact one of our Partners for assistance.

This document only applies to Ubuntu Linux 14.04. It does not refer to optimization tweaks for any other OS. Instructions to install can be found at the bottom of this page.

BIOS Settings
Upon booting, go into the BIOS and ensure that the Reboot after power failure setting is enabled.

IMPORTANT** Because of the multiple versions available, please follow your motherboard manufacturer’s instructions. **

**Ubuntu Updates & Device Drivers** 

1. Ensure all Ubuntu updates are installed. Do this by going to System/ Administration/Update Manager. Click the “Check for Updates” button and install updates until the Update Manager informs you that your system is up to date.
2. Ensure the latest verified and working hardware drivers are installed by navigating to the appropriate website for your Hardware manufacturer, and ensuring that you have the latest drivers. The most important hardware to ensure is up to date are the Video Card, Ethernet Adapter, and Wireless Adapter (if applicable)

**Display Properties** 

1. Change your Screensaver to None.
2. Change your Power Management Preferences so the Display/Monitor never turns off.
3. Make sure are you using the native or most appropriate Display resolution.
4. Autohide the Panel
5. If you want the mouse to be hidden while the Presentation is running, install the ‘unclutter’ package. Do this by opening the Ubuntu Software Center, and searching for the Package ‘unclutter’.

**Operating System Settings** 

1. Remove any Antivirus or Antimalware software. These tools typically degrade the quality of content playback.
2. Change your Power Management Preferences so that your Hard Disk NEVER goes to sleep.
3. Ensure that the user who is logging into the system to run the Rise Vision Player is set to login automatically.

Even after setting the Screensaver to None and Power Management to never turn off, sometimes you may see the screen go dark after rebooting. To correct this, open a Terminal window, and type “gksu gedit /etc/X11/xorg.conf” (without the quotes) and overwrite the text in there with the following:

	Section “ServerFlags”
	Option “BlankTime” “0″
	Option “StandbyTime” “0″
	Option “SuspendTime” “0″
	Option “OffTime” “0″
	EndSection

**Installing on Ubuntu 14.04 32 Bit**

1. Download the 32 Bit Linux Ubuntu installation file from http://www.risevision.com/native-player/#/playerUbuntu
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
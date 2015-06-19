---
layout: user-post
title:  "Native Player on Windows"
date:   2016-06-17 10:31:00
category: user/display
order: 7
---

The Rise Vision Player is the software that must be installed on the computer portion of your display in order to be able to show content from the Rise Vision platform.  It’s the software that takes the presentations and schedules that you create in the platform and sends them to your display screen.

The word “player” is also used in the term “media player”, which refers to the computer portion of your display, i.e., to the device that connects to and powers your digital sign.   But in general, when we talk about the Player, we’re referring to the software.


###Where can I download Player?
To download the Player software, go to http://www.risevision.com/player/ and select the version made for the operating system used by your display’s computer/media player. 

###Windows Native Player Optimization Guide
This document only applies to Microsoft Windows Windows 7 and 8.1. It does not refer to optimization tweaks for any other OS.

BIOS Settings
Upon booting, go into the BIOS and ensure that the Reboot after power failure setting is enabled.
IMPORTANT** Because of the multiple versions available, please follow your motherboard manufacturer’s instructions. **

**Windows 8.1** 

1. The Rise Vision Player does not work on Windows 8, but does work on Windows 8.1. Update your Windows 8 computer to Windows 8.1 by following the steps listed at http://windows.microsoft.com/en-us/windows-8/update-from-windows-8-tutorial
2. Once Windows 8.1 is running, go to the Desktop, right click on the Taskbar and choose Properties. Go to the Navigation tab, and in the “Start Screen” section, ensure that “When I sign in or close all apps on a screen, go to the desktop instead of start” and “show my desktop background on start” are both checked.

**Windows Updates & Device Drivers** 

1. Ensure all Windows updates are installed, and if preferred Windows is configured to download and install updates automatically. The default time for Windows to install and reboot is daily at 3 am, however users can change this to anytime that is acceptable to them.
2. Ensure the latest verified and working hardware drivers are installed by navigating to the appropriate website for your Hardware manufacturer, and ensuring that you have the latest drivers. The most important hardware to ensure is up to date are the Video Card, Ethernet Adapter, and Wireless Adapter (if applicable)

**Display Properties** 

1. Change your Screensaver to None.
2. Change your Power Options so the Display/Monitor never turns off.
3. Make sure are you using the native or most appropriate Display resolution.
4. Autohide the Taskbar

**Operating System Settings** 

1. Remove any Antivirus or Antimalware software. These tools typically degrade the quality of content playback.
2. Set your Computer Settings to “Adjust for Best Performance” in the Advanced System Properties.
3. Set your Virtual Memory (page file) to be 1.5 x the size of the current memory installed on the computer. Choose the Custom Size radio button, and enter the current size of RAM x 1.5 for both the Initial Size and Maximum Size values, and then press Set. Restart the machine.
4. Disable System Restore.
5. Change your Power Options so that your Hard Disk NEVER goes to go Sleep or into System Standby.
6. Disable Hibernation.
7. Disable alerts in the Security Center by choosing the option: “Change the way Security Center alerts me” and uncheck all Alerts.
8. Disable User Account Control.
9. Disable Windows Defender.
10. Disable Windows Indexing on the Hard Drive by opening Windows Explorer, right clicking on your Hard Drive and selecting Properties. At the bottom of the window you’ll see “Allow indexing service to index this disk for faster searches,” uncheck this and click OK. Choose to ignore all warnings to complete this action.
11. Disable any unnecessary programs in the computer startup via MSConfig.
12. Disable any unnecessary Windows Services some examples are (but not limited to):
	* Error Reporting Service
	* Help and Support
	* Print Spooler
	* Security Center
	* Smart Card
	* System Restore Service
	* Themes
	* Windows Time


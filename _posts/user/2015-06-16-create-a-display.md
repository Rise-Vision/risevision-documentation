---
layout: user-post
title:  "Create a Display"
date:   2015-06-16 03:20:00
category: user
order: 2
---
###What’s a Display
We use the term “Display” to refer to both the screen and computer (media player) that together show your content on your digital signage. The media player uses Rise Player to receive and publish your content on your screen.

###Add a Display
From Rise Vision select Displays and then Add Display. Give your Display a name and save it. Once saved a Display ID is generated and you will use that ID to register the media player you install Rise Player on next.

###Install Rise Player
Select the operating system of your media player from the sections below to complete the Rise Player installation and setup your Display.

**If you have a firewall or proxy you may need to configure it to allow our service as per our [network requirements](user/advanced/display/network-requirements).**

**Rise Player will automatically start and take control of our display once your installation is complete.**

If you have questions about your Display setup let us know in the [Community](https://community.risevision.com) or join us on our weekly live [Webinar](https://www.risevision.com/webinars)!

####Windows 8.1
Download the installer from [here](http://install-versions.risevision.com/rvplayer-installer.exe), double click to run it, and then follow the prompts to complete the installation, including entering the Display ID you created above. We recommend that you configure your operating system as per the [Windows Optimization Guide](user/advanced/display/chrome-player-windows).

**To stop Rise Player, enter the key combination of Control + W on your keyboard. Press Control + Alt + Delete on your keyboard to open Task Manager. Select both Java(™) Platform SE Binary processes, and end both tasks.**

####Ubuntu 14.04
Download the installer from [here](http://install-versions.risevision.com/rvplayer-installer.sh). Right click the downloaded file, click Properties, select the Permissions tab and check Allow executing file as program, click Close. Open a terminal window, navigate to the directory you downloaded rvplayer-installer.sh to, and type ./rvplayer-installer.sh and press enter, and then follow the prompts to complete the installation, including entering the Display ID you created above. We recommend that you configure your operating system as per the Ubuntu Optimization Guide.

**Top stop Rise Player, enter the key combination of Control + W on your keyboard. Open a terminal window and type killall java, press enter.**

####Chrome OS
We recommend that all Chrome OS devices be registered under Google Device Management to take use automatically launch the the Player and set the Chrome version 1 or 2 major releases behind the current release to ensure your content is never adversely impacted by an update.

From Google Device Management create an Organizational Unit for your Digital Signage Players and configure the settings as per the following:

1. Set **Power Management** to *Do not allow device to sleep/shut down when on sign in screen*
2. Set **Sign-in Screen** to *Never show user names and photos*
3. Configure **Kiosk Apps** by adding the [Rise Player Application](https://chrome.google.com/webstore/detail/rise-vision-chrome-app-pl/mfpgpdablffhbfofnhlpgmokokbahooi)
	* Click **Manage Kiosk Applications**
	* Select **Chrome Web Store**
	* Search for *Rise Player*
4. Configure Kiosk Settings for the following
	* Set **Public Session Kiosk** for *Do not allow Public Session Kiosk*
	* Configure Rise Player as the **Auto-Launch Kiosk App** 
5. Set **Auto Update** to *Allow auto-updates*
6. Set **Restrict Google Chrome version to at most** to one or two versions behind the current version
7. Set **Randomly scatter auto-updates over** to *None*
8. Set **Auto reboot after updates** to *Disallow auto-reboots*
9. Set **Release Channel** to *Move to Stable Channel*

Once configured, power on your Chromebox, connect it to your network, and at the login screen press Control+Alt+E on your keyboard, and then type in the enrollment email and password associated with your Google account. If an enrollment prompt does not appear, please wipe your Chromebox and repeat this step.

**To stop Rise Player, power cycle your Chromebox. When the Rise Player application is loading, press the key combination of Control + Alt + S on your keyboard to boot into Chrome OS instead of Rise Player.**

####All Other Operating Systems
**To stop Rise Player, enter the key combination  of Control + W on your keyboard**

Ensure that you have the latest version of Chrome installed and if not download it from [www.google.com/chrome](www.google.com/chrome), then install Rise Player from the Chrome Web Store, start it, and when prompted enter the Display ID you created above. If you are using Mac OS configure it as per the [Mac OS Optimization Guide](user/advanced/display/chrome-player-mac) and for all other operating systems disable any screen saver, display standby/sleep mode, as well as configure the Rise Player App to auto-start.
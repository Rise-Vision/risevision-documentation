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
From Rise Vision select Displays and then Add Display. Give your Display a name and save it. Once saved, a Display ID is generated and you will use that ID to register the media player that you install Rise Player on using the steps below.

###Install Rise Player
Select the operating system of your media player from the sections below to complete the Rise Player installation and setup your Display.

**If you have a firewall or proxy you may need to configure it to allow our service as per our [network requirements](user/advanced/display/network-requirements).**

**Rise Player will automatically start and take control of your display once your installation is complete.**

If you have questions about your Display setup let us know in the [Community](https://community.risevision.com) or join us on our weekly live [Webinar](https://www.risevision.com/webinars)!

####Windows 7 
**32-bit and 64-bit**

Download the installer from [here](http://install-versions.risevision.com/rvplayer-installer.exe), double click to run it, and then follow the prompts to complete the installation, including entering the Display ID you created above. We recommend that you configure your operating system as per the [Windows Optimization Guide](user/advanced/display/Windows-Optimization).

**To stop Rise Player, enter the key combination of Control + W on your keyboard. Press Control + Alt + Delete on your keyboard to open Task Manager. Select both Java(™) Platform SE Binary processes, and end both tasks.**

####Ubuntu 14.04 
**32-bit and 64-bit**

Download the installer from [here](http://install-versions.risevision.com/rvplayer-installer.sh). Open a terminal window, navigate to the directory you downloaded rvplayer-installer.sh to, and type the following commands (do not run the installer as root or via sudo):

```
chmod +x rvplayer-installer.sh
./rvplayer-installer.sh

```

Then follow the prompts to complete the installation, including entering the Display ID you created above. We recommend that you configure your operating system as per the [Ubuntu Optimization Guide](user/advanced/display/Ubuntu-Optimization).

**To stop Rise Player, enter the key combination of Control + W on your keyboard. Open a terminal window and type killall java, press enter.**

####ChromeOS
**Development of the Rise Player Chrome Application is currently on hold.  See [this announcement](https://community.risevision.com/rise_vision_inc/topics/chrome-application-player-on-hold-due-to-issues) for further details. Please be aware of this before proceeding with installation.**

We recommend that all Chrome OS devices be registered under Google Device Management. This will allow Rise Player to launch automatically when the device is turned on. We currently recommend that you restrict your Google Chrome version to 47.* to ensure your content is never adversely impacted by an update.

From Google Device Management create an Organizational Unit for your Digital Signage Players and configure the settings as per the following:

1. Set **Power Management** to *Do not allow device to sleep/shut down when on sign in screen*
2. Set **Sign-in Screen** to *Never show user names and photos*
3. Configure **Kiosk Apps** by adding the [Rise Player Application](https://chrome.google.com/webstore/detail/rise-vision-chrome-app-pl/ilcmohdkjfcfekfmpdppgoaaemgdmhaa)
	* Click **Manage Kiosk Applications**
	* Select **Chrome Web Store**
	* Search for *Rise Player*
4. Configure Kiosk Settings for the following
	* Set **Public Session Kiosk** for *Do not allow Public Session Kiosk*
	* Configure Rise Player as the **Auto-Launch Kiosk App** 
5. Set **Auto Update** to *Allow auto-updates*
6. Set **Restrict Google Chrome version to at most** to 44.*
7. Set **Randomly scatter auto-updates over** to *None*
8. Set **Auto reboot after updates** to *Disallow auto-reboots*
9. Set **Release Channel** to *Move to Stable Channel*

Once configured, power on your Chromebox, connect it to your network, and at the login screen press Control+Alt+E on your keyboard, and then type in the enrollment email and password associated with your Google account. If an enrollment prompt does not appear, please wipe your Chromebox and repeat this step.

**To stop Rise Player, power cycle your Chromebox. When the Rise Player application is loading, press the key combination of Control + Alt + S on your keyboard to boot into Chrome OS instead of Rise Player.**

####All Other Operating Systems
**To stop Rise Player, enter the key combination  of Control + W on your keyboard**

Ensure that you have the latest version of Chrome installed and if not download it from [www.google.com/chrome](http://www.google.com/chrome), then install Rise Player from the Chrome Web Store, start it, and when prompted enter the Display ID you created above. If you are using Mac OS configure it as per the [Mac OS Optimization Guide](user/advanced/display/Mac-Optimization) and for all other operating systems disable any screen saver, display standby/sleep mode, as well as configure the Rise Player App to auto-start.

<div class="home-pricing home-pricing-2" style="padding-top: 0px; padding-bottom:40px;">
<div class="content-box ryan-picture-bg remove-bottom">
<div class="content-box-body">
<div class="row">
<div class="col-md-8 col-md-offset-4">
<h2 class="add-top">Upcoming Live Webinars</h2>
<p class="add-bottom">Join the Getting Started with Rise Vision live webinar hosted and presented by Ryan Cahoy. Ryan is a Founder and Evangelist for Rise Vision, an industry renowned digital signage expert, and an often quoted public speaker. Ryan has over 20 years of digital signage experience and you shouldn’t miss this opportunity to both learn about Rise Vision and take advantage of the live Q&A session with him.</p>
<a href="https://www.risevision.com/webinars" class="btn btn-primary btn-hg">Register <i class="fa fa-chevron-circle-right icon-right"></i></a>
</div>
</div>
</div>
</div>
</div>
</div>

<style>
.home-pricing .btn{
margin-top:0px;
}
.ryan-picture-bg {
background-image:url('https://s3.amazonaws.com/Rise-Images/Experimental/ryan-webinar.png');
background-size:cover;
}
@media (max-width: 992px) {
.ryan-picture-bg {
background-image:none;
background-size:cover;
}
}
</style>

---
layout: user-post
title:  "Chrome OS Optimization Guide"
date:   2015-06-17 10:52:00
category: user/advanced/display
order: 1
---
We support Rise Player on Managed Chrome OS devices that are restricted to Chrome OS version 42.* on the Stable channel. We recommend only managed devices, this allows Chrome OS to automatically recover if the Chrome browser inadvertantly shuts down. We recommend always remaining 1 or 2 major versions of Chrome OS behind to make sure your content is compatible with the latest version of Google Chrome OS.


###Configure Your Google Organizational Unit

For [Managed Devices](https://support.google.com/chrome/a/answer/1289314?hl=en), we recommend creating an Organizational Unit for your Digital Signage Players with the settings configured per the below. Settings not shown can be left as default.

1. Set **Power Management** for Do not allow device to sleep/shut down when on sign in screen
2. Set **Sign-in Screen** to *Never show user names and photos*
3. Configure **Kiosk Apps** by adding the [Rise Player Application](https://chrome.google.com/webstore/detail/rise-vision-chrome-app-pl/mfpgpdablffhbfofnhlpgmokokbahooi)
	* Click **Manage Kiosk Applications**
	* Select Chrome Web Store
	* Search for Rise Player
4. Configure Kiosk Settings for the following
	* Set **Public Session Kiosk** for *Do not allow Public Session Kiosk*
	* Configure Rise Player as the **Auto-Launch Kiosk App** 
5. Set **Auto Update** to *Allow auto-updates*
6. Set **Restrict Google Chrome version to at most** to **42**
7. Set **Randomly scatter auto-updates over** to **None**
7. Set **Auto reboot after updates** to **Disallow auto-reboots**
8. Set **Release Channel** to *Move to Stable Channel*

###Enroll Your Chromebox

Before enrolling your device, you’ll need to recover your Chromebox to it’s default factory settings. See the instructions located at [Google’s help page](
https://support.google.com/chrome/a/answer/1360642?hl=en), under the section “Wipe a Chromebox”.

1. Power on your Chromebox
2. Follow the on-screen instructions to connect to a wireless network
3. At the login screen press **Control+Alt+E** on your keyboard
4. Type in the enrollment email and password associated with your Google account
5. Select **Enroll device**
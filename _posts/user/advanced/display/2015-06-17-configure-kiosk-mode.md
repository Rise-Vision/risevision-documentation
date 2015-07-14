---
layout: user-post
title:  "Chrome OS Optimization Guide"
date:   2015-06-17 10:52:00
category: user/advanced/display
order: 1
---
We support Chrome OS devices that are enrolled in [Google Device Management](https://support.google.com/chrome/a/answer/1289314?hl=en), this allows Chrome OS to automatically recover if the Chrome browser inadvertently shuts down. We recommend always remaining 1 or 2 major versions of Chrome OS behind to ensure your content is never adversely impacted by an update.


###Configure Your Google Organizational Unit

For [Managed Devices](https://support.google.com/chrome/a/answer/1289314?hl=en), we recommend creating an Organizational Unit for your Digital Signage Players with the settings configured per the steps below. Settings not shown can be left as default.

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

###Enroll Your Chromebox

1. Power on your Chromebox
2. Follow the on-screen instructions to connect to a wireless network
3. At the login screen press **Control+Alt+E** on your keyboard
	> NOTE: If an enrollment prompt does not appear, please [wipe your Chromebox](https://support.google.com/chrome/a/answer/1360642?hl=en)
4. Type in the enrollment email and password associated with your Google account
5. Select **Enroll device**
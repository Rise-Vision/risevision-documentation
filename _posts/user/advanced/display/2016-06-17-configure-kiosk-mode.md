---
layout: user-post
title:  "Chrome OS Optimization Guide"
date:   2016-06-17 10:52:00
category: user/display
order: 1
---
We support Rise Player on Chrome OS that is running the latest version of Chrome on the Stable Channel. 

###Configure Single App Kiosk Mode for Unmanaged Devices
Before configuring your device for Kiosk Mode, you’ll need to recover your Chromebox to it’s default factory settings. See the instructions located at [Google’s help page](https://support.google.com/chrome/a/answer/1360642?hl=en), under the section “Wipe a Chromebox”.

1. At the login screen press **Control+Alt+K** on your keyboard
2. An Automatic Kiosk Mode windows will appear, select **Enable**
3. Log in to your Chrome OS device
4. Open Chrome and navigate to *chrome://extensions*
5. Select the **Developer mode** checkbox
6. Select **Manage kiosk applications**
7. In **Add kiosk application** field, enter the Application ID *mfpgpdablffhbfofnhlpgmokokbahooi*
8. Click **Add**
9. Highlight the Kiosk App and select **auto launch**
10. Select **Done** and restart
11. After restart, select **Confirm** to accept the Auto-launch permission

###Configure Single App Kiosk Mode for Managed Devices

For [Managed Devices](https://support.google.com/chrome/a/answer/1289314?hl=en), we recommend creating an Organizational Unit for your Digital Signage Players with the settings configured per the below. Settings not shown can be left as default.

1. Set **Power Management** for Do not allow device to sleep/shut down when on sign in screen
2. Set **Sign-in Screen** to *Never show user names and photos*
3. Configure **Kiosk Apps** by adding the [Rise Player Application](https://chrome.google.com/webstore/detail/rise-vision-chrome-app-pl/mfpgpdablffhbfofnhlpgmokokbahooi)
4. Configure Kiosk Settings for the following
	* Set **Public Session Kiosk** for *Do not allow Public Session Kiosk*
5. Configure Rise Player as the Auto-Launch Kiosk App 
6. Set **Auto Update** to *Allow auto-updates*
Set **Release Channel** to *Move to Stable Channel*
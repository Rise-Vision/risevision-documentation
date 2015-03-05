---
layout: user-post
title:  "Chrome Player for Chrome OS"
date:   2014-10-13 10:52:00
category: user/player/chrome-app
order: 1
---

An application on Chrome OS must be configured for single app kiosk mode **using Chrome Device Management** in order for it to startup automatically when the device is powered on or rebooted.

###What is Chrome Device Management###
Chrome device management provides Chrome for Work Administrators the ability to configue policies for a Chrome device, such as configuring an application to start automatically on boot up.

For more details on managing Chrome devices using Chrome Device Management, please see the documentation here, https://support.google.com/chrome/a/answer/1289314?hl=en

###Configure Single App Kiosk Mode for Managed Devices 

1. From the Chrome admin panel, navigate to Device Management > Chrome > Device Settings
2. Select the organizational unit you want to configure the kiosk settings for.
3. Under Single App Kiosk select Allow Single App Kiosk
4. Select Manage Kiosk Settings. A dialog will appear titled Kiosk Apps
5. From the dialog, select the Chrome Web Store option and search for [Rise Vision Chrome App Player](https://chrome.google.com/webstore/detail/rise-vision-chrome-app-pl/mfpgpdablffhbfofnhlpgmokokbahooi)
6. In the search results, select Add to the right of the Rise Vision Chrome App Player
7. Select Save
8. In the Auto-Launch Kiosk App dropdown menu select Rise Vision Chrome App Player
9. Save the settings

Devices enrolled and assigned to the organizational until with the configuration above will have the Rise Vision Chrome App automatically installed and configured to run on start up.

###Configure Single App Kiosk Mode for Non-Managed Devices

**This must be done on a freshly wiped device**

1. Power on fresh device, At the welcome screen input your network information, **do not log in**.
2. At the login screen press CTRL+ALT+K and enable kiosk mode 
3. Log in to Chromebox
4. Open a new tab in Chrome, enter chrome://extensions in the address bar. Press enter.
5. Check the box next to Developer Mode
6. Click add kiosk application, enter the ID mfpgpdablffhbfofnhlpgmokokbahooi
7. Mouse over the app and select "auto launch"
8. Press enter or click done
9. Reboot when asked, enable app for Kiosk mode
10. Now the app will launch automatically when the Chromebox is rebooted.
11. To turn off kiosk mode, reboot the Chromebox. While the device is starting up, press CTRL+ALT+S to interrupt the process and return to the log in screen.


More information about Single App Kiosk Mode can be found [here](https://support.google.com/chromebook/answer/3134673?hl=en).



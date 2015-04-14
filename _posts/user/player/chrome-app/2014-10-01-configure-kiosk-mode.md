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

Devices enrolled and assigned to the organizational unit with the configuration above will have the Rise Vision Chrome App automatically installed and configured to run on start up.

More information about Single App Kiosk Mode can be found [here](https://support.google.com/chromebook/answer/3134673?hl=en).

###Chrome App Player (first run)
When the Player is launched for the first time you will be warned that the Display ID is not found.

You will need a uniqe ID for each player in your company. This ID can be obtained by clicking on the Displays link from within the [RVA interface,](http://rva.risevision.com/) and clicking on an existing Display (if replacing one) or the "Add Display" button (if adding a new one). More information can be found [here.](http://help.risevision.com/#/user/player/register-player)

You assign this ID by clicking on the "Enter Display ID" button and entering the sequence obtained from RVA Displays, mentioned above.
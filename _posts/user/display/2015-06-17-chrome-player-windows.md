---
layout: user-post
title:  "Windows Optimization"
date:   2015-06-17 10:52:00
category: user/display
order: 0
---
We support Rise Player on Windows 8.1 running the latest stable version of Chrome 

###Turn Screensaver Off
1. From Control Panel select **Appearance and Personalization**
2. Select **Change Screen Saver** and set **Screensaver as (None)**. Save the change.

###Configure Power Options
1. From Control Panel select **System and Security** 
2. Select **Power Options** and update to use the **High performance** plan
3. Select **Change plan settings** to the right of the High performance plan title
4. From the **High performance settings** page, update the options per the below. Settings not shown can remain as the default
5. Set Hard disk > Turn off hard disk after to *0*
6. Set Display > Turn off display after to *0*

###Disable Scaling
1. Right click the Chrome Browser shortcut and select **Properties** then select the **Compatibility** tab 
2. Uncheck **Disable scaling on high DPI** and select **OK**

###Disable Windows Security Alerts
1. From Control Panel select **System and Security**
2. Select **Action Center**
3. In the left pane, select **Change Action Center Settings**
4. **Uncheck** all fields under **Security Messages** and **Maintenance Messages**

###Configure Application Monitor
1. Download the **Application Monitor** install package from *http://www.jockersoft.com/scripts/dl_count.php?fileId=2*
2. Right click on the zip file and select **Extract All**
3. Move the newly created appmonitor folder to *c:\*
4. Launch **Application Monitor** from the folder.
	+ In the open file dialog, make sure that Always ask... is NOT checked
	+ If prompted, follow the steps to install the .net framework 3.5
5. Once the application is launched, click **Add** 
 	* Name: *Rise Player*
 	* Path: *C:\Program Files\Google\Chrome\Application\chrome.exe*
 	* Arguments: *--profile-directory=Default --app-id=mfpgpdablffhbfofnhlpgmokokbahooi*
 	* Check Every: *0.50 minutes*
 	* Select **create**
6. In the top menu, select **Tools**, **Settings**
7. Check **Load with Windows** and click save.
8. Select the checkbox next to the Rise Player entry.
9. Reboot to test.

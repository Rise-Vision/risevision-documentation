---
layout: user-post
title:  "Chrome Player for Windows"
date:   2014-10-13 10:52:00
category: user/player/chrome-app
order: 5
---

#####Install Chrome App Player
1. Using Google Chrome, install the Rise Vision Chrome App Player from www.risevision.com/player


#####Configure the Chrome App Player to auto start
1. Open a Tab in Chrome, and browse to chrome://apps. Right click on the Rise Vision Chrome App Player, and select Create Shortcuts. Create a Shortcut for the Desktop.
2. Copy and paste the Desktop shortcut into “C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup\”. Restart your Display, and the Rise Vision Chrome App Player will start automatically.

#####Disable Scaling on Windows
1. From the desktop, right-click on the Chrome browser icon and select Properties.
2. Go to the compatibility tab and clear the check box for “Disable scaling on high DPI settings.”
3. Click on OK to close the Properties Window.

#####Schedule Reboot on Windows
1. Press WinKey+R > type taskschd.msc and press Enter (this launches Task Scheduler)
2. Left click from the right pane on the Task Scheduler Library > open Action from the top menu > New Folder... > name it MyTasks > click OK
3. Left click on the MyTasks > choose Action from menu > Create Basic Task... (this will open task wizard)
4. You can enter the Name , for example "Reboot Computer", and press Next
5. In Trigger section you can specify when you want to run your task, for example:
Select Daily , and press Next.
Now you can specify the day, the hour and set to recur every day, now press Next.
6. In Action section you can choose what you want to run, for example restart your system:
Choose Start a program, press Next
in the Program/script field type shutdown /r , and press Next, press finish.
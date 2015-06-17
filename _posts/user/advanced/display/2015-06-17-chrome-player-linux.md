---
layout: user-post
title:  "Ubuntu Optimization Guide"
date:   2015-06-16 10:52:00
category: user/advanced/display
order: 2
---
We support Ubuntu 14.04 running the latest stable version of Chrome

###Disable power save
1. Click the settings cog in the taskbar and select **System Settings**
2. Select **Brightness & Lock**
3. Change **Turn screen on when inactive** for to *Never*
4. Turn **Lock** off
5. Click **All Settings**
6. Select **Power**
7. Change **Suspend when inactive** for to *Don’t Suspend*

###Disable System Updates Notifications
1. Open **terminal**
2. Type *sudo mv /usr/bin/update-notifier /usr/bin/update-notifier.real* and press enter
3. Type *sudo gedit /asr/bin/update-notifier* and press enter
4. Add two lines to this document 
	* #!/bin/sh 
	* exit 0
5. **Save** and exit the document
6. In terminal type *sudo chmod +x /usr/bin/update-notifier* press enter

###Disable Apport
1. Open **terminal**
2. Type *sudo gedit /etc/default/apport*
3. Edit the last line in the document to read *enabled=0*
4. **Save** and exit

###Configure a scheduled reboot
1. Open **terminal**
2. Type *sudo gedit /etc/crontab*
3. At the bottom, type *0 3 * * * root /sbin/shutdown -r now*
4. **Save** and exit

###Configure a Watchdog script to open Rise Player if it closes
1. Open a Terminal window
2. Type gedit /home/rise/rise_player_watchdog.sh
3. Paste the following into the new document

	```
	#!/bin/bash
	CHROME_PS_CHECK=`ps ax | grep chrome | grep app-id=mfpgpdablffhbfofnhlpgmokokbahooi | grep Sl`
	if [ -z "$CHROME_PS_CHECK" ]; then       #if chrome is not running, then launch it
   echo "Chrome/Player crashed.  Restarted:  `date`" >> /home/rise/player_restarted.log
   export DISPLAY=":0"
   # an assumption was made about the profile directory. if player doesn't start correctly, replace the following
   # line with the one in the desktop shortcut properties (and append      &>/dev/null &     like you see below)
   /opt/google/chrome/chrome \"--profile-directory=Profile 1\" --app-id=mfpgpdablffhbfofnhlpgmokokbahooi &>/dev/null &
	fi
	```
	
4. **Save** and Exit
5. In **terminal**, type *chmod +x /home/rise/rise_player_watchdog.sh*
6. In **terminal**, type *crontab -e*
7. If prompted, press enter for the default editor
8. Use the arrow keys on your keyboard to scroll to the bottom of this document
9. Copy/paste the following two lines
	```
	* * * * * /home/rise/rise_player_watchdog.sh
	15 01 01 */3 * rm -f /home/rise/player_restarted.log 2> /dev/null
	```
10. Press **Control + X** to exit the document
11. Press **Y**  to save the buffer
12. Press **Enter** to use the file name already specified
13. Wait up to 60 seconds. If the player does not start, the launch string will need to be changed
14. **The following steps are only needed if the player does not automatically start.**
15. **Right click** the desktop icon for Rise Player and select **Properties**
16. **Highlight** the entire Command line and copy the text
17. In **terminal**, type *gedit /home/rise/rise_player_watchdog.sh*
18. Replace the line beginning with */opt/google/chrome/chrome* with the text copied from the shortcut.
19. Save and exit
---
layout: user-post
title:  "Display Control"
date:   2014-10-13 10:52:00
category: user/player/chrome-app
order: 6
---

##What is Display Control
Display Control is a feature, built into the Rise Vision Chrome App Player, that when configured will turn a LCD Display on or off according to the Schedule the Display is assigned to. For example, if you define your Schedule to play from 8:00 AM to 5:00 PM, Display Control will turn your LCD Display on at 8:00 am, and off at 5:00 PM.

Display Control sends on and off commands using a serial port. In order to utilize this feature, a serial connection needs to be made between the Media Player and LCD Display.

##How to configure Display Control commands
1. From the Presentations page, add a new Presentation.
2. Add a placeholder to the presentation, then click "Add" and choose "Content by URL".
3. Change the Type to URL and enter "http://localhost:9449/dc" (without the quotes) and click Save.
4. You'll want to make sure the placeholder is at least 600x300 to ensure all the controls are visible.
2. Assign the Presentation to the Schedule assigned to your Display running the Rise Vision Chrome App Player.
3. When the Presentation loads, a configuration page will appear that looks like this:
![Step 1]({{site.absoluteurl}}assets/images/player/display-control.png)

4. Using a mouse and keyboard, configure the following:

	**Serial Port**: select the appropriate port based on your setup.
	
	 **On Command**: the hexadecimal command used to turn the Display on
	 
	**Off Command**: the hexadecimal command used to turn the Display off

5. Change the Status to On, and press Apply.
6. Test turning your Display on and off. To test that Commands are working correctly, you will need to remote into the Media Player using a tool such as VNC. Click the Display Off button, and your Display should turn off. Click the Display On button and the Display should turn on. If the Display does not respond, verify that your commands are entered correctly and that you have a serial connection between the Display and Media Player.


When setting the start or finish time for the Schedule, it must be at least 10 minutes from the current time on the Display. Schedules must be longer than 15 minutes for Display Control to work correctly.

When creating a  Schedule, it must be saved at least 15 minutes before the time set for when the Presentation starts or ends.  For example, if you intend for your Display to turn on at 8:00 AM, your Schedule needs to be configured, and saved, by 7:45 AM.

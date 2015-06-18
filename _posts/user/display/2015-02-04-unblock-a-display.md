---
layout: user-post
title:  "Why is my Display Blocked?"
date:   2015-02-04 10:52:00
category: user/display
order: 5
---

###What is a Display Block?
Displays periodically request data from the Rise Vision Platform for content updates, application updates and monitoring functionality. While operating normally, a Display should only request data when starting the Rise Vision Player, and once every time content is updated on the Display. On average, this amounts to 100 or less connections per day. If a Display requests data more often than that, that Display will be blocked. A block can last up to three hours. While a Display is blocked it will not show any content updates or CAP Alerts.

###Why do we block a Display that exceeds this rate?
Excessive connections are typically an indication of an error, incorrect configuration or abuse of the Rise Vision API’s. To ensure that the Rise Vision platform keeps performing acceptably, we block Displays that meet the criteria listed above.

###How do I know if a Display has been blocked?
When a Display is blocked, a message will show on screen indicating that the Display has been blocked. When you look at your Displays list, any Displays that are currently blocked will have a red colored heart next to the name of the Display. If you hover your mouse over the red heart, text will appear informing you the Display is blocked. In the Display settings, you will see a list of Display errors at the bottom of the page showing the date the Display was blocked, as well as a description of the error.

###What to do if a Display becomes blocked:
It is not possible to unblock a Display once it has become blocked. When a block expires in 3 hours or less, the Display will resume playing content, but will get blocked again if the Display attempts to request data more often than expected. If your Display becomes blocked, we recommend the following actions:

1. Verify the Display has the appropriate firewall and proxy settings. You can find more about this [here]({{site.absoluteurl}}user/player/network-requirements).
2. Ensure that your media player is not running out of memory (RAM). If Chrome runs out of resources during operations, it will restart and make additional connections to the Rise Vision Platform.
3. Ensure that a refresh meta tag is not included in your Presentation HTML, as this will result in a message showing on top of your Presentation stating “Multiple Display Instances found in this Browser session” every time the refresh action occurs, and can lead to the Display being blocked.
4. Ensure that only one instance of the Rise Vision Player is configured to start automatically. This can be checked by clicking on the Windows start button in the bottom left corner, clicking on "All Programs", then clicking on "Startup".  If you see more than one entry for Rise Vision Player (or Rise Vision Chrome App Player), right click on it and select "Delete". Do this until only one entry remains.
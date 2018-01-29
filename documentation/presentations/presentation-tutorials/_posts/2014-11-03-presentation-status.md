---
layout: documentation-post
title:  "Status of Presentation Items"
date:   2014-11-03 11:21:00
category: documentation/presentations/presentation-tutorials
parent-order: 1
order: 2
---

If you’ve ever spent time inspecting a Presentation using Chrome’s Developer Tools, you may have noticed that the Viewer outputs some information that you might find useful, especially when debugging a Presentation that is not working correctly. Let’s walk through what that information is and how to view it.

## Examining the Log
You can open the Developer Tools by using a keyboard shortcut. In the new window that opens, click the *Elements* toolbar item if it is not already selected. Inside the `<body>` tag, you should see a `<div>` with an id of `log`. `log` contains some messages about the status of all of the items in the Presentation:

<img src="http://www.risevision.com/wp-content/uploads/2014/11/presentation-log.png" alt="Presentation Log" style="width: 612px;"/>

## Item IDs
The IDs used to identify each item in the log are somewhat cryptic. To distinguish between them, you can inspect the last character. Widgets will end with *w*, Presentations with *p*, images with *i*, videos with *v*, and HTML items with *H* . If you have given your Placeholders meaningful names, you should be able to distinguish the items from each other.

## Item States
Every Presentation item should have a message in the log that reports it as being *ready*. You may also see the *loading* state for content like images and videos, where it takes a while for that particular piece of content to download. The Viewer will attempt to load an image or video 3 times before giving up:

<img src="http://www.risevision.com/wp-content/uploads/2014/11/presentation-log-error.png" alt="Presentation Log Error" style="width: 626px;"/>
---
layout: documentation-post
title:  "Inactivity Timeouts"
date:   2014-11-05 11:21:00
category: documentation/presentations/presentation-tutorials
parent-order: 1
order: 4
---

If you’ve ever built a multi-page Presentation for a touchscreen, you may have wondered if there was a way to return to the home page after a predetermined period of inactivity. You’ll be happy to know that this can be accomplished using a third party jQuery plugin.

## The jQuery idleTimer Plugin
The [jQuery idleTimer plugin](http://www.paulirish.com/2009/jquery-idletimer-plugin/) is used to accomplish this. The plugin works by starting a timer; if the timer expires without someone interacting with the Presentation, a custom event is fired. This event can then be handled by navigating to the home page.

The plugin is available for download on [GitHub](https://github.com/paulirish/jquery-idletimer/zipball/master). After including it in the Presentation, start the timer with this line of code:

```
$.idleTimer(60000);
```

The parameter that is passed to this function is the timeout value in milliseconds. In this case, the timer will expire after 60,000 milliseconds (i.e. 60 seconds).

Next, add code to handle the `idle.idleTimer` event that the plugin fires when the timer expires:

```
$(document).bind("idle.idleTimer", function() {
  // Show the home page.
});
```

It’s a good idea to destroy the timer before starting a new one. That can be achieved with the following jQuery code:

```
$.idleTimer('destroy');
```
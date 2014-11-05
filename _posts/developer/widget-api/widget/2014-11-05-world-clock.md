---
layout: developer-post
title:  "World Clock"
date:   2014-11-05 15:52:00
category: developer/widget-api/widget
parent-order: 1
order: 4
---


## World Clock

The World Clock Widget displays the local time, or the time in a specific time zone, in either digital or analog format.

### How It Works

The World Clock Widget’s settings support internationalization and provide translations for the following languages:

- English
- Spanish
- Italian
- Norwegian

The analog clock is rendered using the HTML5 `<canvas>` element, while the digital clock is rendered inside of a `<div>` tag. Each clock type redraws itself every second. The font size of the digital clock is not specified in the settings, but rather is automatically scaled so that it grows to be as large as the Placeholder allows.

Time zone conversions are handled using [TimezoneJS](https://github.com/mde/timezone-js), which uses [Olson](http://en.wikipedia.org/wiki/Tz_database) zoneinfo files for its time zone data.

### Resources
[World Clock Widget](https://github.com/Rise-Vision/widget-world-clock)
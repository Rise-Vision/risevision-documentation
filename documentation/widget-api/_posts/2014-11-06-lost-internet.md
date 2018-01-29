---
layout: documentation-post
title:  "Handling a Lost Internet Connection"
date:   2014-11-06 11:08:00
category: documentation/widget-api
parent-order: 0
order: 7
---

When building Widgets, it’s important to handle the situation where the Internet goes down while the Widget is playing. A Widget should never stop playing if the Internet connection is lost. Instead, it should continue cycling through its cached data.

## Caching the Data
Every time the Widget goes out to the Internet to retrieve new information, that information should be cached in a Javascript variable(s). For example, in the case of the RSS Widget, all data is cached in a variable called `feedData`. Whenever the Widget needs to show a new entry, it can just read from the `feedData` variable instead of making another costly HTTP request.

But what if the Internet goes down? No problem. Displays will stay running because the Widget will continue cycling through cached results. Of course, in order for this to work properly, the Widget must have had the chance to play through at least once in its entirety, so that any images that might appear in the feed entries can be cached by the browser.

## Refreshing the Data
But what about when the time comes for the Widget to check for new content? If the Internet connection has been lost, the Widget may block while it waits for its callback function to execute, so unless you gracefully recover from that situation, the Widget will halt.

How you recover depends on your particular Widget. With the RSS Widget, for example, a timer is started immediately before new data is requested. This timer is set to expire after five seconds. If it does, the Widget proceeds with showing the next feed entry from the cache. If instead the Widget receives a response back from the feed before that five seconds is up, the timer is cancelled, the cached data is updated, and the Widget can start showing the refreshed content.

The code snippet might look a little something like this:

```
var self = this;

// Start a timer in case there is a problem loading the feed.
this.feedLoadFailedTimer = setTimeout(function() {
  // Show next feed entry.
  self.showFeed();
}, 5000);

// Attempt to load the feed.
this.feed.load(function(result) {
  if (!result.error) {
    clearTimeout(self.feedLoadFailedTimer);
    self.feedData = result.feed;
    // Show next feed entry.
    self.showFeed();
  }
});
```
## The Google Visualization API
For Widgets that use the Google Visualization API to read data from a Google Spreadsheet, it’s even easier. The Visualization API handles refreshes for you, and because it pushes updates to the Widget only when changes have been detected, the Widget never blocks when the Internet is disconnected. Once the Internet comes back up, the Visualization API resumes querying for data. So, no extra work is required on your part.

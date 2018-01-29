---
layout: documentation-post
title:  "Getting the Widget IDs"
date:   2014-11-02 11:08:00
category: documentation/presentations/multi-page
parent-order: 0
order: 1
---

Let’s assume that we have a two page Presentation – the first page contains the Google Spreadsheet and Financial Table Widgets and the second page has a Calendar Widget. We want to pause these Widgets when the page they are on is hidden, and start them again when the page they are on is visible.

The first hurdle is in figuring out what the Widget IDs are. The easiest way to determine that is to add the following temporary code:

```
$(document).bind("gadgetReady", function(e, id) {
  console.log(id); // Temporary code for getting the Widget IDs.
});
```

Now, when the Presentation is previewed, the `id` for all Widgets, Gadgets, Presentations, Images, Videos and HTML Items will be displayed in the console. To distinguish between them, look at the last character. Widget IDs end with *w*, Gadgets with *g*, Presentations with *p*, Images with *i*, Videos with *v* and HTML with *H*. If you have given your Placeholders meaningful names, you should be able to distinguish the Widgets from each other. In this example, the Widget IDs are `sc0_pre0_spreadsheet_0w`, `sc0_pre0_financial_0w`, and `sc0_pre0_calendar_0w`.

## The Dynamic Nature of Widget IDs
We can now create an array of JSON objects containing the IDs of all Widgets for which we want to control playback, as well as the page they are on, so that we can stop and start Widgets at the appropriate times. There is a further complication though, and that is that Widgets are renamed when changes are made and published to the Display. When that happens, the IDs would become `sc1_pre0_spreadsheet_0w`, `sc1_pre0_financial_0w` and `sc1_pre0_calendar_0w`. The next time changes are made, they would be `sc2_pre0_spreadsheet_0w`, `sc2_pre0_financial_0w` and `sc2_pre0_calendar_0w`, and so on. Now what?

Well, we know that only the first part of the Widget ID will change, so let’s store the part that won’t:

```
var pages = [];

pages.push({
  "id": "spreadsheet_0w",
  "page": 1
});
pages.push({
  "id": "financial_0w",
  "page": 1
});
pages.push({
  "id": "calendar_0w",
  "page": 2
});
```
## The *gadgetReady* Event
We’re still going to need to get the full Widget ID so that we can control playback later on. We can do that when the Presentation first loads by adding an event listener for the `gadgetReady` event, which we already know will pass the full ID of the Widget as an argument. This event fires every time a Widget, Gadget, Presentation, Image, Video or HTML Item reports that it is *ready* and is about to start playing:

```
$(document).bind("gadgetReady", function(e, id) {
  var newId = id.substring(9);
  for (var i = 0; i < pages.length; i++) {
    if (newId == pages[i].id) {
      pages[i].id = id;
      break;
    }
  }
});
```

This code starts by removing the first nine characters of the `id `that is passed to the callback function, so that it can be compared to our existing value (which has already had the first nine characters removed). Next, all of the Widget IDs are iterated over. If a match is found, the `id` parameter is simply re-assigned back to the original field. This is done because the `id` parameter contains the full Widget ID (e.g. `sc0_pre0_spreadsheet_0w`, `sc0_pre0_financial_0w` etc.).
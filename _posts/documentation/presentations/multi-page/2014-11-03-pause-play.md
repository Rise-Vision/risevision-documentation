---
layout: documentation-post
title:  "Pausing and Playing Widgets"
date:   2014-11-03 11:08:00
category: documentation/presentations/multi-page
parent-order: 0
order: 2
---

What if a user were to navigate to the second page of the Presentation? The Calendar Widget would need to be started and both the Spreadsheet and Financial Table Widgets would need to be paused. How can we accomplish this?

To pause a Widget, we can call the `pauseCmd` function, which takes the ID of the Widget to pause. Knowing this, let’s write a function that takes a page number as a parameter, and pauses all Widgets that are on that page:

```
function pause(page) {
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].page == page) {
      pauseCmd(pages[i].id);
    }
  }
}
```

Similarly, to play a Widget, we can use the `playCmd` function, which takes the ID of the Widget to play. Here’s a function that will play all Widgets on a particular page:

```
function play(page) {
  for (var i = 0; i < pages.length; i++) {
    if (pages[i].page == page) {
      playCmd(pages[i].id);
    }
  }
}
```

From here, all that needs to be done is to call these functions at the appropriate times, passing in the page number as a parameter.
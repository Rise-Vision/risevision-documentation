---
layout: documentation-post
title:  "play, pause and stop Commands"
date:   2014-11-06 11:08:00
category: documentation/widget-api
parent-order: 0
order: 3
---

## The *play* Command
After a Widget lets the Viewer know that it is loaded and ready to be shown, the Viewer will respond by calling the Widget’s *play* command. *play* is also called after a Widget has been paused and its turn in the Playlist has come around again. It is here where the Widget should be restarted, if applicable. This might involve setting timers or starting a video, depending on the nature of the Widget. Or it may not be necessary to implement the *play* command at all.

To add support for *play*, start by declaring a service that the Viewer can call at the appropriate time. Add the following code at the point where the Widget is doing its initialization work:

```
var id = new gadgets.Prefs().getString("id");
gadgets.rpc.register("rscmd_play_" + id, play);
```

Here we are registering a service called `rscmd_play_xxx` (where `xxx` is the Widget's ID). When this service is called, the `play` function will be invoked.

It follows that the next step would be to provide an implementation for `play`. This function takes no parameters, so the skeleton code is simply:

```
function play() {
  // Start the Widget, set timers etc.
}
```

## The *pause* and *stop* Commands
The *pause* and *stop* commands are similar. *pause* is called when there are multiple items in the Playlist and the Widget has not been set as *Play Until Done*. The Widget will show for the number of seconds as specified by the item’s *Duration* field, after which time the *pause* command will be called, and the Viewer will move to the next Playlist item. *pause* is also executed after the Widget has informed the Viewer that it is *done*.

*stop* is called when a Presentation is no longer scheduled to play as per its timeline, or when there are multiple Presentations in a Schedule and the current Presentation has reached the end of its allotted time.

The following code is used to register services for *pause* and *stop*:

```
gadgets.rpc.register("rscmd_pause_" + id, pause);
gadgets.rpc.register("rscmd_stop_" + id, stop);
```

Then just add an implementation for the `pause` and `stop` functions:

```
function pause() {
  // Pause the Widget.
}

function stop() {
  // Stop the Widget.
}
```
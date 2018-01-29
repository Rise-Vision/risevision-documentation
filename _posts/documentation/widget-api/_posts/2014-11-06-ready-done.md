---
layout: documentation-post
title:  "ready and done Events"
date:   2014-11-06 11:08:00
category: documentation/widget-api
parent-order: 0
order: 2
---

Any Widget that is created needs to communicate with the Viewer in order to tell it things such as when it has finished loading its content (the *ready* event) and when it has finished playing through once (the *done* event).

Every Widget needs to support the *ready* event. If it does not, the Viewer will not display the Widget and will instead move to the next item in the Playlist. The *done* event becomes important when the Widget has been marked as *Play Until Done* and there are other items in the Playlist. In this scenario, if the Widget never tells the Viewer when it is *done*, the Viewer will not know when to move on to show the next Playlist item.

## The *ready* Event
So, how does a Widget tell the Viewer when it is *ready*? Once the Widget has finished initializing and loading its content, it should communicate its *ready* state to the Viewer by calling the following Javascript function:

```
function readyEvent() {
  gadgets.rpc.call("", "rsevent_ready", null, prefs.getString("id"), true, true, true, true, true);
}
```

The `gadgets.rpc.call` declared above includes several parameters. Here’s the breakdown:

- The ID of the RPC service provider ("" means the parent container).
- The name of the service that is being called.
- The name of a local callback function to be executed when the RPC call is complete.
- The ID of the Widget.
- Whether or not the Widget supports the *play* command.
- Whether or not the Widget supports the *stop* command.
- Whether or not the Widget supports the *pause* command.
- Whether or not the Widget supports the *ready* event.
- Whether or not the Widget supports the *done* event.

## The *done* Event
A similar call is made when the Widget needs to tell the Viewer that it is *done*. The point at which a Widget can be considered to be in this state will vary. For example, if the Widget is showing a video, it would be considered to be finished after the video has played through once. You will need to use your own best judgment for your particular Widget.

The function call for the *done* event is as follows:

```
function doneEvent() {
  gadgets.rpc.call("", "rsevent_done", null, prefs.getString("id"));
}
```

The parameter breakdown looks like this:

- The ID of the RPC service provider ("" means the parent container).
- The name of the service that is being called.
- The name of a local callback function to be executed when the RPC call is complete.
- The ID of the Widget.
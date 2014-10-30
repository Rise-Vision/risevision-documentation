---
layout: post
title:  "Heartbeat"
date:   2014-10-01 10:52:00
category: documentation/player-api
parent-order: 1
order: 2
---

Enables the Viewer to tell the Player that it is running. Rise Player will restart the Viewer if there is no heartbeat after three minutes. 
This is identical to [Ping](#{% post_url /documentation/player-api/player/2014-10-01-ping %}), but Ping allows other applications (such as InstallScript) to ping the Player without interfering with Heartbeats from the Viewer.

To send heartbeat to the Player, send the following GET request to localhost:

`http://localhost:9449/heartbeat?callback={callbackFunctionName}`

####Parameters

| Name    | Required | Description |
|:--------|:--------:|:------------|
| **callback**  |  **YES** | The name of a callback function to execute when the server responds. |


####Output

If successful, this method returns JSONP with no data:

```
myCallback();
```

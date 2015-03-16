---
layout: developer-post
title:  "Getting Information about the Display"
date:   2014-11-06 11:08:00
category: developer/widget-api
parent-order: 0
order: 5
---

There may come a time when a Widget needs to know some information about the Display it is running on. There are two pieces of information that can be requested from the Viewer – the Display ID and the Display address.

## Requesting the Display ID
To request the Display ID, make the following RPC call:

```
gadgets.rpc.call("", "rsparam_get", null, id, "displayId");
```

where `id` is the ID of the Widget. You can read about how to retrieve a Widget's ID [here](developer/widget-api/widget-parameters).

## Requesting the Display Address
To request the address of the Display, simply swap out the last parameter:

```
gadgets.rpc.call("", "rsparam_get", null, id, "displayAddress");
```

## Receiving the Response
The Viewer sends back a response via RPC as well. To receive it, the Widget needs to include the following RPC call:

```
gadgets.rpc.register("rsparam_set_" + id, handler);
```

where `id` is the ID of the Widget and `handler` is the name of a callback function to which the Viewer sends the response.

The callback function takes two parameters – `name` and `value`:

```
function handler(name, value) {
  // Add code to handle the response.
}
```

`name` is either `displayId` or `displayAddress`, depending on the particular type of request being made. `value` is the Display’s ID or the Display’s address. If the Widget is being previewed, an empty string (`""`) is returned.
---
layout: developer-post
title:  "Getting Information about the Company"
date:   2014-11-06 11:08:00
category: developer/widget-api
parent-order: 0
order: 6
---

It is possible to retrieve the Company ID and social connection data for the Company that a Display is associated with. Currently, supported social connections include Foursquare and Twitter.

## Requesting the Company ID
To request the Company ID, make the following RPC call:

```
gadgets.rpc.call("", "rsparam_get", null, id, "companyId");
```

where `id` is the ID of the Widget. You can read about how to retrieve a Widget's ID [here](developer/widget-api/widget-parameters).

## Requesting a Social Connector
To retrieve a social connector, use this RPC call for Foursquare:

```
gadgets.rpc.call("", "rsparam_get", null, id, "social:foursquare");
```

For Twitter, use the following code:

```
gadgets.rpc.call("", "rsparam_get", null, id, "social:twitter");
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

For a Company ID request, `name` is `companyId` and `value` is the ID of that Company.

For a social connection request, `name` is either `social:foursquare` or `social:twitter` and `value` is a JSON string with the following format:

```
{
  "network": social_network,
  "access": access_token(s),
  "companyLocation": location_token
}
```

where:

- `network` is the name of a social network;
- `access` is the Foursquare OAuth access token associated with the Display, or an array containing the Twitter request token and request token secret for the Display;
- `companyLocation` is the Foursquare venue ID and is not applicable for Twitter.
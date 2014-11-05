---
layout: developer-post
title:  "Presentation"
date:   2014-10-01 10:52:00
category: developer/viewer-api/content
parent-order: 0
order: 2
---

Returns Presentation data (for preview, etc).

To request Presentation data, send the following GET request **over SSL**:

`https://rvaserver2.appspot.com/v1/viewer/presentation/{presentationId}?callback={callbackFunctionName}`

####Parameters

| Name    | Required | Description |
|:--------|:--------:|:------------|
| **presentationId**  |  **YES**  | Unique ID of the Presentation. |
| **callbackFunctionName**  |  **NO**  | Name of the JavaScript callback function to be used for JSONP response. If this value is omitted, JSON response is returned. |

####Output

If the Presentation exists:

*JSON:*

```javascript
{"status": {"code": 0, "message": "OK."}, "content": content_object}, "company": {"authKey": authentication_key}, "social":[ {"network":network_name, "access": access_token, "location": location_token}, ... ]}
```

*JSONP:*

```javascript
callbackFunctionName({"status": {"code": 0, "message": "OK."}, "content": content_object}, "company": {"authKey": authentication_key}, "social":[ {"network":network_name, "access": access_token, "location": location_token}, ... ]});
```

where

`content_object` contains a list of Presentations, including the Presentation identified by presentationId and all embedded Presentations, without duplicates.

`authentication_key` is the Authentication Key of the Company that the Presentation belongs to.

`network_name` is the name of a social network.

`access_token` is the OAuth access token for the particular social network associated with the Company that the Presentation belongs to.

`location_token` is the location token for the particular social network associated with the Company that the Presentation belongs to.

*Example (JSON):*

```javascript
{"status": {"code": 0, "message": ""}, "content": {
"presentations": [{
"changeDate": "05052010163511084",
"id": "8780b3e3-9725-4233-9e48-063ef0fa9233",
"isTemplate": false,
"distribution": [],
"layout": "<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">n<html>nt<head>ntt<meta http-equiv="content-type" content="text/html;
charset=UTF-8">ntt<title></title>nt</head>nnt<body style="height:1080px;width:1920px; margin: 0; overflow: hidden;" >nt
<div id="ph0" style="width:1360px;height:768px;left:0px;top:0px;z-index:0;position:absolute;overflow:hidden;"></div>
<div id="ph1" style="width:1920px;height:1080px;left:0px;top:0px;z-index:1;position:absolute;
overflow:hidden;"></div><div id="ph2" style="width:1920px;height:1080px;left:0px;top:0px;z-index:1;position:absolute;overflow:hidden;"></div>
<div id="ph3" style="width:1920px;height:1080px;left:0px;top:0px;z-index:1;position:absolute;overflow:hidden;"></div></body>n</html>n",
"publish": 0
}}],
"company": {"authKey":"xyz"},
"social":[ {"network":"facebook", "access": "ABCD1234", "location": null}, {"network": "foursquare", "access": "XYZ09876", "location": "sa232312edf00sd"}]}
```

If the Presentation does not exist:

*JSON:*

```javascript
{"status": {"code": 7, "message": ""Presentation not found""}, "content": null}, "company": null, "social":null}
```

*JSONP:*

```javascript
callbackFunctionName({"status": {"code": 7, "message": ""Presentation not found""}, "content": null}, "company": null, "social":null});
```
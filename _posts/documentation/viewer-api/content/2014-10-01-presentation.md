---
layout: post
title:  "Presentation Data"
date:   2014-10-01 10:52:00
category: documentation/viewer-api
parent-order: 0
order: 1
---

##Viewer Data Bundle for a Presentation
URI: https://SERVER/v1/viewer/presentation/{presentationId}?callback={callbackFunctionName}
Sample URI: https://rdncore.appspot.com/v1/viewer/presentation/8b65aa4d-bf41-4334-bf06-487fdd9dbc51?callback=cb124532 
SSL Required: Yes

INPUT PARAMETERS

presentationId: Unique identifier of the Presentation
callbackFunctionName: Name of the JavaScript callback function to be used for the JSONP response

 

GET
Returns a JSONP data bundle for a given Presentation.

OUTPUT

If the Presentation exists and callbackFunctionName is provided, HTTP status code 200 (OK) and the following JSONP data are returned:

callbackFunctionName({"status": {"code": 0, "message": ""}, "content": content_object}, "company": {"authKey": authentication_key}, "social":[ {"network":network_name, "access": access_token, "location": location_token}, ... ]");

content_object contains a list of Presentations, including the Presentation identified by presentationId and all embedded Presentations, without duplicates.

authentication_key is the Authentication Key of the Company that the Presentation belongs to.

network_name is the name of a social network.

access_token is the OAuth access token for the particular social network associated with the Company that the Presentation belongs to.

location_token is the location token for the particular social network associated with the Company that the Presentation belongs to.

If the Presentation does not exist, HTTP status code 404 (Not Found) is returned.

If callbackFunctionName is missing, HTTP status code 400 (Bad Request) is returned.

SAMPLE OUTPUT

callback23431({ "status": {"code": 0, "message": ""}, "content": {
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
}}], "company": {"authKey":"xyz"}, "social":[ {"network":"facebook", "access": "ABCD1234", "location": null}, {"network": "foursquare", "access": "XYZ09876", "location": "sa232312edf00sd"}]});
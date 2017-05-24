---
layout: documentation-post
title:  "Authorization API"
date:   2014-10-13 10:52:00
category: documentation/store-api/store-auth
order: 2
---

You need to call Store Authorization API when you need to check if the App is authorized or not. Typically you would call it upon startup and then as soon (or shortly before) the authorization expires. You should not call this API needlessly as there is a protection mechanism that would block your App if you call our server too often.

In addition to this API, we have made available a common library with the Store Authorization implemented. You can learn more about this library here, 

##Store Authorization API Endpoint

To call Store Authorization API, send the following GET request **over SSL**:

`https://store-dot-rvaserver2.appspot.com/v1/widget/auth?callback={callback_function_name}&id={display_id}&pc={product_code}&srv={serverIdA,serverIdB}`

**API Parameters**
 
``callback`` OPTIONAL is a name of JavaScript function that will be used in JSONP response that the API will return. This parameter is optional, if you don’t provide it, regular JSON (not JSONP) response will be returned.

`id` or `cid` REQUIRED

- `id` is the id of a Display the applicaton is running on
- `cid` is id of the Company that uses the application. When cid is used, all Displays that belong to the Company will be authorized to use the Application or Widget.

`pc` REQUIRED is the Product Code we issued for your Widget

`srv` OPTIONAL is a comma-separated list of Server IDs you want to get signatures for.

`startTrial` OPTIONAL is a boolean flag indicating if trial should start automatically. The default value is `true`. If you don't want a new trial to start, then pass `false`.

**API Response Parameters**

`authorized` boolean parameter indicating whether or not your Widget is authorized. If true, widget is authorized until `expiry_time`

`expiry_time` contains UTC time of authorization expiry

`signatures` an array of (serverId, value) pairs. Used when authorizing to an API server.

`errors` an array of errors

_ _ _


**Example GET request with all request parameters**

`https://store-dot-rvaserver2.appspot.com/v1/widget/auth?callback=myCallback&id=ABCD1234&pc=40bd001563085fc35165329ea1ff5c5ecbdbbeef&srv=RiseFinancial`

*Response:*

`myCallback({“authorized”:true,"expiry_time":”2014-03-27T18:25:43.511Z”, “signatures”:[{“serverId”:”RiseFinancial”, “value”:”8cb2237d0679ca88db6464eac60da96345513964”}], “error”:null});`

_ _ _

**Example GET request without** `callback`

`https://store-dot-rvaserver2.appspot.com/v1/widget/auth?id=ABCD1234&pc=40bd001563085fc35165329ea1ff5c5ecbdbbeef&srv=RiseFinancial`

*Response:*

`{“authorized”:true,"expiry_time":”2014-03-27T18:25:43.511Z”, “signatures”:[{“serverId”:”RiseFinancial”, “value”:”8cb2237d0679ca88db6464eac60da96345513964”}], “error”:null}`


_ _ _


**Example GET request without** `srv` and `callback`

`https://store-dot-rvaserver2.appspot.com/v1/widget/auth?id=ABCD1234&pc=40bd001563085fc35165329ea1ff5c5ecbdbbeef`

*Response:*

`{“authorized”:true,"expiry_time":”2014-03-27T18:25:43.511Z”,“signatures”:null, “error”:null}`
- - -



The easiest way to call the API is to use the JQuery Ajax function. This Javascript code sample will call the Authorization API, interpret the result, and set up a timer for refreshing the APIs status:

```
var url = "https://store-dot-rvaserver2.appspot.com/v1/widget/auth?id=" + displayId + "&pc=" + productCode;
var HOUR_IN_MILLIS = 60 * 60 * 1000;

$.ajax({
  dataType: "json",
  url: url,
  success: function(data, textStatus) {
    if (data && data.authorized) {
      // authorized
      
      // check again for authorization one hour before it expires
      var milliSeconds = new Date(data.expiry).getTime() - new Date().getTime() - HOUR_IN_MILLIS;
      setTimeout(this.callApi, milliSeconds);
    }
    else if (data && !data.authorized) {
      // not authorized

      // check authoriztation every hour if failed
      setTimeout(this.callApi, HOUR_IN_MILLIS);
    }
    else {
      // API failed, try again in an hour
      setTimeout(this.callApi, HOUR_IN_MILLIS);
    }
  },
  error: function() {
    // authorization failed
    
    // check authoriztation every hour if failed
    setTimeout(this.callApi, HOUR_IN_MILLIS);
  }
};
```


_ _ _


## Testing & debugging your implementation

Once the Store Authorization has been implemented (either via the component or custom code), it is adviseable that it is tested both on a Display and in a Presentation Preview, to ensure all scenarios work correctly.

Here are some of the things that may go wrong, with some possible solutions:

**Issue:** The Server responds that the Display Id/Company Id cannot be found.

**Solution:** Ensure the retrieval method for the Id is working correctly, triggering an `alert()` in the Javascript code with the specific Id will do the trick.


**Issue:** The Server responds that the Widget is not authorized despite the fact that it has been Purchased

**Solution:** Ensure that the Presentation and Display that are being used are from the same Company where the Widget has been Purchased.

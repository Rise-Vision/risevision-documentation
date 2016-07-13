---
layout: developer-post
title:  "Using the widget-common Library"
date:   2014-10-13 10:52:00
category: developer/store-api/store-auth
order: 3
---

The Store authorization process has been implemented in one of our common libraries:
https://github.com/Rise-Vision/widget-common/

To access it, add the following Javascript files from the dist folder to your HTML:

*dist/config.js*

*dist/store-auth.js*

To correctly show the widget overlay, copy or add the CSS file to your HTML as well:

*dist/css/store-auth.css*

**Authorization starts by initializing the object:**

```
var _auth = new RiseVision.Common.Store.Auth();

and calling the checkForDisplay function:

_auth.checkForDisplay(displayId, productCode, function(authorized) {
  if (authorized) {
    // The Widget is authorized
  }  
});
```

If Authorization fails, the component will show an overlay on top of the Widget informing the User that `The Widget is not authorized`, and the callback will be called with an `authorized` value of `false`. Otherwise, the value will be `true`. The component will also take care of querying the Server automatically before the Expiry Time to confirm the Widget is still authorized. The same callback will be called with the response.

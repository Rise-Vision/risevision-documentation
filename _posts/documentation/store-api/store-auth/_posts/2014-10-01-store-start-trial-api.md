---
layout: documentation-post
title:  "Start Trial API"
date:   2017-04-24 10:52:00
category: documentation/store-api/store-auth
order: 4
---

You need to call Store Start Trial API if you want to start a trial outside of your widget. Normally you don't need to use this API because trial starts automatically when a widget calls Authorization API the first time. However when you call Store Authorization API with the `startTrial=false` parameter, the trial never starts. If you want to start a trial from the widget itself, you can either use Authorization API without `startTrial=false` parameter or call Start Trial API. If you want to start a trial outside of the widget, then it's better to use Start Trial API.


##Start Trial API Endpoint

To call Start Trial API, send the following GET request **over SSL**:

`https://store-dot-rvaserver2.appspot.com/v1/product/{product_code}/company/{company_id}/trial/start?callback={callback_function_name}`

**API Parameters**
 
`product_code` REQUIRED is the Product Code we issued for your Widget

`company_id` REQUIRED is the id of the Company for which trial should be started

**API Response Parameters**

`error` is an empty string if call was successful, otherwise the error description

_ _ _


**Example GET request**

`https://store-dot-rvaserver2.appspot.com/v1/product/1212112121212121212121/company/23232323232323232323232323/trial/start?callback=myCallback`

*Response:*

Success: `myCallback({"error":""});`

Error: `myCallback({"error":"Company not found."});`

**Example GET request without** `callback`

`https://store-dot-rvaserver2.appspot.com/v1/product/1212112121212121212121/company/23232323232323232323232323/trial/start`

*Response:*

Success: `{"error":""}`

Error: `{"error":"Company not found."}`

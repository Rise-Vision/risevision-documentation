---
layout: developer-post
title:  "Overview"
date:   2014-10-13 10:52:00
category: developer/store-api/subscription-status
order: 1
---
###What is Subscription Status
Subscription Status is an API endpoint that can be used to confirm the subscription status of a product that is using the Store Authorization API.

As an example, the Rise Vision appplication, Rise Storage(storage.risevision.com) requires a monthly subscritpion on a per Company basis. 

Using Subscription Status we can communicate the current status in the UI for a User that logs into the application. In the example below, the status returned was Subscribed.


![Subscripton Status Example]({{ site.baseurl }}assets/images/subscription-status/status-example.png)
---
layout: documentation
---
##Introduction

Rise Vision APIs (Core API and Viewer API) allow client applications to view and update digital signage-related objects supported by the Rise Vision platform.

These objects include:

- [Company](#{% post_url /documentation/core-api/company/2014-10-01-companies %})
- Display
- User
- Schedule
- Presentation

Relationships between these objects can be described as follows:

![Core ERD]({{ site.baseurl }}/assets/images/core_erd.png)

Utility read-only objects, such as:

- Country
- State
- Time Zone

are also provided to facilitate building of the user interface.

Rise Vision APIs are [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer), they can be used on any platform using any development environment for as long as it supports sending and receiving data via HTTP protocol. 

Rise Vision Core API is based on [Google Cloud Endpoints](https://cloud.google.com/appengine/docs/java/endpoints/) which you can easily consume from a [Javascript client](https://cloud.google.com/appengine/docs/java/endpoints/consume_js).  

---
layout: documentation
---
##Introduction

Rise Vision provides a number of APIs to help you build digital signage applications and widgets that work with Rise Vision Platform and Rise Store:


###Core API

Allows client applications to view and update digital signage-related objects supported by the Rise Vision platform:

- [Company](#{% post_url /developer/core-api/company/2014-10-01-companies %})
- [Display](#{% post_url /developer/core-api/display/2014-10-01-displays %})
- [User](#{% post_url /developer/core-api/user/2014-10-01-users %})
- [Schedule](#{% post_url /developer/core-api/schedule/2014-10-01-schedules %})
- [Presentation](#{% post_url /developer/core-api/presentation/2014-10-01-presentations %})
  
Relationships between these objects can be described as follows:

![Core ERD]({{ site.baseurl }}/assets/images/core_erd.png)

Utility read-only objects, such as:

- [System Message](#{% post_url /developer/core-api/systemmessage/2014-10-01-systemMessages %})
- [Country](#{% post_url /developer/core-api/country/2014-10-01-countries %})
- [Time Zone](#{% post_url /developer/core-api/country/2014-10-01-countries %})

are also provided to facilitate building of user interfaces.

Core API is based on [Google Cloud Endpoints](https://cloud.google.com/appengine/docs/java/endpoints/) which you can easily consume from a [Javascript client](https://cloud.google.com/appengine/docs/java/endpoints/consume_js).  
  
You can use Core API to build a wide range of apps from custom UIs for Rise Vision Platform to any kind of background content processing apps with little user interaction.
It is important to keep in mind that Core API uses OAuth2 to authenticate the user and in most cases the user will be required to log in to start the app.    
In order to use Core API your app needs to have OAuth2 client Id ([here's how to obtain it](#{% post_url /developer/core-api/2014-10-01-clientId %})).

*Applications that use Core API:* [Rise Vision Common Header](https://github.com/Rise-Vision/common-header)


###Viewer API

Allows client applications to request content (schedules, presentations) as well as receive content change notifications via [Channels](https://cloud.google.com/appengine/docs/java/channel/).

You can use Viewer API to build a custom Viewer app that would show content stored in Rise Vision Platform on your displays. 
Because Viewer API is designed with unattended apps in mind, there is no requirement for the user to login, instead the API uses display's unique ID to authenticate. 

*Applications that use Viewer API:* [Rise Viewer](https://github.com/Rise-Vision/viewer)


###Player API

Facilitates development of support applications running on local displays and managing content caching, display control, etc.

You can use Player API to create a custom Player app that can start Viewer (standard or custom), cache files, turn the display hardware on and off, etc on an OS of your choice.

*Applications that use Player API:* [Rise Player](https://github.com/Rise-Vision/player-native), [Rise Player for Raspberry Pi](https://github.com/Rise-Vision/player-raspberrypi)

###Widget API


[to be added]


###Store API

Allows client applications to authorize with Rise Store and 3rd party application servers as well as look up status of Rise Store Products.

Any app or widget sold from Rise Store will need to use Store API in order to check their authorization based on purchase status and customer account standing. 

*Applications that use Store API:* [Financial Table Widget](https://github.com/Rise-Vision/widget-financial-table)

---

Rise Vision APIs are [RESTful](http://en.wikipedia.org/wiki/Representational_state_transfer), they can be used on any platform using any development environment for as long as it supports sending and receiving data via HTTP protocol. 

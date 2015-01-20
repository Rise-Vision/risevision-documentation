---
layout: developer-post
title:  "Overview"
date:   2014-10-13 10:52:00
category: developer/store-api/store-auth
order: 1
---

###What is Store Authorization
Store Authorization is a mechanism we provide for you to authorize your Apps (which could be mobile or desktop apps, widgets, gadgets, presentations or templates with embedded scripts, or any other pieces of code you created that are able to use HTTPS to connect to our Store server) with our Store based on their purchase status and the Customer account standing. Simply put, this is what ensures that only those who purchased your Apps are allowed to use them.

Whenever Store Authorization API is called by your App our Store records the usage of the App by the Customer whose display is running the App. This is how the Store knows who to bill and for how much for the usage of your App. It means that calling Store Authorization API  is what allows you to get paid for Apps you sell through our Store.  

Store Authorization also provides the ability to authorize Apps (successfully authorized by our Store) with your Servers (if applicable). In other words, if you have a Server that supplies data or performs some functionality, or supports your Apps in some way, this is what helps ensure that only those who paid for the App are allowed to use your Server.

###How it all works (The Big Picture)

![Apps (Widgets) that are used on individual Displays]({{ site.baseurl }}/assets/images/store-auth-widget.png)

![Apps that are NOT used on individual Displays]({{ site.baseurl }}/assets/images/store-auth-app.png)

**Viewer** is a web app that runs content on Displays. Widgets you develop will be incorporated into that content.

**Display ID** is a unique ID our system uses to identify Customer displays. Widgets can request the ID of the Display they are running on from the Viewer.

**Company ID** is a unique ID our system uses to identify Customer company. 

**Product Code** is issued by us. It identifies the Widget to the Store.

**Server Keys** are issued by us. They allow your Servers to validate App requests without having to connect to the Store server.

**Signature** is produced from Display ID, Product Code, Expiry Time and the appropriate Server Key on the Server. Apps only need to pass the Signature they receive from the Store to the appropriate Server (if applicable), no processing or calculations on the Widget side is required.

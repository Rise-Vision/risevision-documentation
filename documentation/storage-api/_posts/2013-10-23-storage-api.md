---
layout: documentation-post
title:  "Storage API"
date:   2014-11-21 10:52:00
category: documentation/storage-api
parent-order: 0
order: 0
---

## Overview

Storage provides the ability to manage media that can be used by and referenced from the Rise Vision digital signage platform.

It is an implementation of [Google Cloud Storage](https://cloud.google.com/storage/docs/overview). Your company has one _bucket_ that contains _objects_ (folders and files).

### Accessing files in your app

There are many ways to access storage in your application. Authorization is not required. You can retrieve a list of files using these components and APIs:

- [rise-storage web component](http://rise-vision.github.io/web-component-rise-storage/components/web-component-rise-storage/rise-storage/)
- [storage.files.get]({{site.absoluteurl}}documentation/storage-api/storage.files.get) (RiseVision API)
- [storage.objects.get](https://cloud.google.com/storage/docs/json_api/v1/objects/get) (Google API)
- Files can be accessed directly by their URL.

### Updating files through your web browser

You can manage your files and folders by logging in to your account at [rva.risevision.com](http://rva.risevision.com). Choose 'Storage' from the menu.

### Managing storage using the API

The Storage API provides the ability to programmatically manage storage using the Google API javascript client also referred to as "gapi".

Each company within Rise Vision has one bucket that contains the objects that can represent either files themselves or folders that contain files.

The Storage API name is "storage" and version is "v0.01" when using the gapi.client.load function.

Here is an example of a self-contained html page that you can run on localhost:8000.  This demostrates how to use javascript to authenticate and use the storage api method storage.files.get.

_This uses an example Company Id: e78d4e89-fb21-3411-a20f-8b5a73bc3693. Use your own Company Id instead. Company Id can be found in the "Settings" area of [rva.risevision.com](http://rva.risevision.com) in the URL._

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Storage Test Page</h1>
    <div id="loaded"></div><br><br>
    result: <span id="result"></span><br><br>
    Message: <span id="message"></span><br><br>
    Code: <span id="code"></span><br><br>
    Received Files?  <span id="received"></span><br><br>
    <a href="#" onclick="getFiles();">Get Files!</a>

  <script type="text/javascript">
    var ROOT_URL = 'https://storage-dot-rvaserver2.appspot.com/_ah/api';

    function gapiClientLoad() {
      gapi.client.load("storage","v0.01", function(){
        if (gapi.client.storage) {
          document.getElementById('loaded').innerHTML = "STORAGE API is loaded";
          getFiles();
        }
      }, ROOT_URL);
    }

    function getFiles(){
        var parameters = {};
        parameters['companyId'] = "e78d4e89-fb21-3411-a20f-8b5a73bc3693";
        gapi.client.storage.files.get(parameters).execute(function(resp) {
            document.getElementById('message').innerHTML = resp.message;
            document.getElementById('result').innerHTML = resp.result ? "true" : "false";
            document.getElementById('code').innerHTML =  resp.code;
            document.getElementById('received').innerHTML = (resp.files) ? "success" : "failed";
        });
    }
  </script>
  <script type="text/javascript"
  src="//apis.google.com/js/client.js?onload=gapiClientLoad"></script>
  </body>
</html>
```

Below is the method available with gapi.client once gapi is properly loaded:

#### [storage.files.get]({{site.absoluteurl}}documentation/storage-api/storage.files.get)

**GET**

**URI:** https://www.googleapis.com/storage/v1/b/risemedialibrary-{company-id}/o

**Sample URI:** https://www.googleapis.com/storage/v1/b/risemedialibrary-e599b4e8-c8b9-41d5-7770-b4193c789883/o

gets and returns the list of files given a company id and optional folder name.

***

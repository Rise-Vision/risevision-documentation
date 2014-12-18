---
layout: developer-post
title:  "Storage API"
date:   2014-11-21 10:52:00
category: developer/storage-api
parent-order: 0
order: 0
---

## Overview
Test Update

Storage provides the ability to manage media that can be used by and referenced from the Rise Vision digital signage platform.

It is an implementation of [Google Cloud Storage](https://cloud.google.com/storage/docs/overview). Your company has one _bucket_ that contains _objects_ (folders and files).

### Accessing files in your app

There are many ways to access storage in your application. Authorization is not required. You can retrieve a list of files using these components and APIs:

- [rise-storage web component](http://rise-vision.github.io/web-component-rise-storage/components/web-component-rise-storage/rise-storage/)
- [storage.files.get]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.files.get %}) (RiseVision API)
- [storage.objects.get](https://cloud.google.com/storage/docs/json_api/v1/objects/get) (Google API)
- Files can be accessed directly by their URL.

### Updating files through your web browser

You can manage your files and folders by logging in to your account at [rva.risevision.com](http://rva.risevision.com). Choose 'Storage' from the menu.

### Managing storage using the API

The Storage API provides the ability to programmatically manage storage using the Google API javascript client also referred to as "gapi".

Each company within Rise Vision has one bucket that contains the objects that can represent either files themselves or folders that contain files.

For more information to how to authorize using OAUTH 2.0 with Google API please refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs

The Storage API name is "storage" and version is "v0.01" when using the gapi.client.load function.

The gapi.auth.authorize method requires a Client Id which can be found in the web/js/config under prod.js in the storage-client repository.

SCOPES are urls that will be able to retrieve user information like google account email, they are provided in the config file.

Here is an example of a self-contained html page that you can run on localhost:8000.  This demostrates how to use javascript to authenticate and use the storage api method storage.files.get.

_Note this will not work on localhost (localhost:80) as it is not an accepted origin for google to authenticate to our servers with. Use localhost:8888_

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
    <a href="#" onclick="signin();" id="signinButton">Sign In!</a>

  <script type="text/javascript">
    var ROOT_URL = 'https://storage-dot-rvaserver2.appspot.com/_ah/api';
    var CLIENT_ID = '614513768474.apps.googleusercontent.com';
    var SCOPES = 'https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

    function gapiClientLoad() {
      gapi.client.load("storage","v0.01", function(){
        if (gapi.client.storage) {
          document.getElementById('loaded').innerHTML = "STORAGE API is loaded";
            gapiAuth(true, getFiles)
        }
      }, ROOT_URL);
    }

    function gapiAuth(mode, authorizeCallback){
        gapi.auth.authorize({
            client_id: CLIENT_ID,
            scope: SCOPES,
            immediate: mode
        },authorizeCallback);
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

    function signin(){
        gapiAuth(false, function(){
            location.reload();
        });
    }
  </script>
  <script type="text/javascript"
  src="//apis.google.com/js/client.js?onload=gapiClientLoad"></script>
  </body>
</html>
```

Below are the available methods with gapi.client once gapi is properly loaded:

#### [storage.createBucket]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.createBucket %})

**POST**

**URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucket?companyId={companyId}

**Sample URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucket?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883

 
Adds a new bucket under the given company-id. (requires Authorization)

***

#### [storage.createFolder]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.createFolder %})

**POST**

**URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/folder?companyId={companyId}&folder={folder}

**Sample URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/folder?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&folder=myFolder

Adds a new folder under the given company-id and folder. (requires Authorization)

***

#### [storage.deleteBucket]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.deleteBucket %})

**DELETE**

**URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucket?companyId={companyId}

**Sample URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucket?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883

Deletes the bucket under the given company-id. (requires Authorization)

***

#### [storage.getBucketBandwidth]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.getBucketBandwidth %})

**GET**

**URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucketBandwidth?companyId={companyId}

**Sample URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucketBandwidth?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883

Gets the bandwidth of the google storage bucket for the given company-id. (requires Authorization)

***

#### [storage.getResumableUploadURI]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.getResumableUploadURI %})

**GET**

**URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getUploadURI?companyId={companyId}&fileName=(fileName)&fileType=(fileType)

**Sample URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getUploadURI?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&fileName=myPic.png&fileType=image/png

Gets the upload URI for the given company id and filename. (requires Authorization)

***

#### [storage.files.delete]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.files.delete %})

**POST**

**URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/files?companyId={companyId}&files=(fileName)&files=(fileName)

**Sample URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/files?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&files=myPic.png&files=myImage.png

Deletes a file or group of files for the given company id and strings of file names. (requires Authorization)

***

#### [storage.files.get]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.files.get %})

**GET**

**URI:** https://www.googleapis.com/storage/v1/b/risemedialibrary-{company-id}/o

**Sample URI:** https://www.googleapis.com/storage/v1/b/risemedialibrary-e599b4e8-c8b9-41d5-7770-b4193c789883/o

gets and returns the list of files given a company id and optional folder name.

***

#### [storage.trash.move]({{site.hashTag}}{% post_url /developer/storage-api/2014-11-21-storage.trash.move %})

**POST**

**URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/trash?companyId={company-id}&files=(fileName)&files=(fileName)

**Sample URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/trash?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&files=myPic.png&files=myImage.png

Moves a file or group of files to the trash folder given a company id and strings of file names.

***

#### [storage.trash.restore]({{site.hashTag}}{% post_url /developer/storage-api/2014-11-21-storage.trash.restore %})

**PUT**

**URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/trash?companyId={company-id}&files=(fileName)&files=(fileName)

**Sample URI:** https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/trash?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&files=myPic.png&files=myImage.png

Restores a file or group of files from the trash folder to their original path given a company id and strings of file names.

***
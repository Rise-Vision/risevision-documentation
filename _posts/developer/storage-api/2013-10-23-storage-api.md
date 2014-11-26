---
layout: developer-post
title:  "Storage API"
date:   2014-11-21 10:52:00
category: developer/storage-api
parent-order: 0
order: 0
---

#### Introduction

Storage provides the ability to manage media that can be used by and referenced from the Rise Vision digital signage platform.

The Storage API provides the ability to programmatically manage storage using the Google API javascript client also referred to as "gapi".

Each company within Rise Vision has one bucket that contains the objects that can represent either files themselves or folders that contain files.

For more information to how to authorize using OAUTH 2.0 with google apis please refer to https://developers.google.com/api-client-library/javascript/reference/referencedocs

The Storage API name is "storage" and version is "v0.01" when using the gapi.client.load function.

The gapi.auth.authorize method requires a Client Id which can be found in the web/js/config under prod.js in the storage-client repository.

SCOPES are urls that will be able to retrieve user information like google account email, they are provided in the config file.

storage.files.get does not require authorization and can be used by anyone without having to call the gapi.auth.authorize method.

Here is an example of a self-contained html page that you can run on localhost:8000.  This demostrates how to use javascript to authenticate and use the storage api method storage.files.get.

_note this will not work on localhost (localhost:80) as it is not an accepted origin for google to authenticate to our servers with. Use localhost:8888_

_this uses an example Company Id: e78d4e89-fb21-3411-a20f-8b5a73bc3693 please use your own Company Id instead._

_Company Id can be found in the "Settings" area of rva.risevision.com in the URL_

```
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

POST

uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucket?companyId={companyId}

sample uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucket?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883

 
Adds a new bucket under the given company-id. (requires Authorization)

***

#### [storage.createFolder]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.createFolder %})

POST

uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/folder?companyId={companyId}&folder={folder}

sample uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/folder?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&folder=myFolder

Adds a new folder under the given company-id and folder. (requires Authorization)

***

#### [storage.deleteBucket]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.deleteBucket %})

DELETE

uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucket?companyId={companyId}

sample uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucket?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883

deletes the bucket under the given company-id. (requires Authorization)

***

#### [storage.getBucketBandwidth]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.getBucketBandwidth %})

GET

uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucketBandwidth?companyId={companyId}

sample uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/bucketBandwidth?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883

gets the bandwidth of the google storage bucket for the given company-id. (requires Authorization)

***

#### [storage.getResumableUploadURI]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.getResumableUploadURI %})

GET

uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getUploadURI?companyId={companyId}&fileName=(fileName)&fileType=(fileType)

sample uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/getUploadURI?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&fileName=myPic.png&fileType=image/png

gets the upload URI for the given company id and filename. (requires Authorization)

***

#### [storage.files.delete]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.files.delete %})

POST

uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/files?companyId={companyId}&files=(fileName)&files=(fileName)

sample uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/files?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&files=myPic.png&files=myImage.png

deletes a file or group of files for the given company id and strings of file names. (requires Authorization)

***

#### [storage.files.get]({{site.hashTag}}{% post_url /developer/storage-api/2014-10-23-storage.files.get %})

GET

uri: https://www.googleapis.com/storage/v1/b/risemedialibrary-{company-id}/o

sample uri: https://www.googleapis.com/storage/v1/b/risemedialibrary-e599b4e8-c8b9-41d5-7770-b4193c789883/o

gets and returns the list of files given a company id and optional folder name.

***

#### [storage.trash.move]({{site.hashTag}}{% post_url /developer/storage-api/2014-11-21-storage.trash.move %})

POST

uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/trash?companyId={company-id}&files=(fileName)&files=(fileName)

sample uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/trash?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&files=myPic.png&files=myImage.png

moves a file or group of files to the trash folder given a company id and strings of file names.

***

#### [storage.trash.restore]({{site.hashTag}}{% post_url /developer/storage-api/2014-11-21-storage.trash.restore %})

PUT

uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/trash?companyId={company-id}&files=(fileName)&files=(fileName)

sample uri: https://storage-dot-rvaserver2.appspot.com/_ah/api/storage/v0.01/trash?companyId=e599b4e8-c8b9-41d5-7770-b4193c789883&files=myPic.png&files=myImage.png

restores a file or group of files from the trash folder to their original path given a company id and strings of file names.

***
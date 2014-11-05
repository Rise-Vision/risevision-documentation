---
layout: post
title:  "Components"
date:   2014-10-01 10:52:00
category: developer/player-api/installer
parent-order: 0
order: 1
---

Returns the list of Installation Components with versions.

To request the list of components, send the following GET request **over SSL**:

`https://rvaserver2.appspot.com/v2/player/components?os={os}&id={displayId}`

####Parameters

| Name    | Required | Description |
|:--------|:--------:|:------------|
| **os**  |  **YES** | Operating System. Valid values: `win`= Windows, `lnx` = Linux |
| **id**  |  **NO**  | Unique ID of the Display. If provided, the response includes the components as specified on the Displays page for that particular Display. If not provided, a default list of components is returned. |


####Output

If `os` value is valid:

```
PlayerVersion=2.0.035
PlayerURL=http://commondatastorage.googleapis.com/rise-player%2FRisePlayer-2.0.035.zip
InstallerVersion=2.2.00037-test
InstallerURL=https://rvacore-test.appspot.com/player/download?os=win
BrowserVersion=24.0.1312.56
BrowserURL=http://commondatastorage.googleapis.com/chrome-windows%2Fchrome-win32-24.0.1312.56.zip
CacheVersion=1.0.008
CacheURL=http://commondatastorage.googleapis.com/risecache%2FRiseCache-1.0.008.zip
JavaVersion=7.9
JavaURL=http://commondatastorage.googleapis.com/javazipfile%2Fjre-7.9-32bit.zip
```

If `os` value is not valid, HTTP Status 400 (Bad Request) is returned.

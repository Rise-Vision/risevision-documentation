---
layout: post
title:  "Convert to Local"
date:   2014-10-01 10:52:00
category: documentation/player-api
parent-order: 3
order: 2
---

Gets file name from a URL. The names of downloaded files in the cache folder are encrypted, so this API call can aid in troubleshooting.

To obtain the local file name, send the following GET request to localhost:

`http://localhost:9494/localname?url={url}`

or the following HEAD request to localhost:

`http://localhost:9494/localname?url={url}`

####Parameters

| Name    | Required | Description |
|:--------|:--------:|:------------|
| **url**  |  **YES** | URL to convert. |


####Output

If successful, this method returns the file name in plain text format. For example:

```
4E73388A
```
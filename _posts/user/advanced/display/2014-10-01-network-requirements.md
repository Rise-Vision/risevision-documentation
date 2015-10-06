---
layout: user-post
title:  "Network Requirements"
date:   2015-09-24 08:26:00
category: user/advanced/display
order: 3
---


###Network Requirements
Firewall Exceptions
To function properly with the Rise Vision Player, a display must be able to access certain resources on port 80 (http) and 443 (https). Specifically, the following addresses need to be added to your firewall’s exceptions list:

- rvashow2.appspot.com
- rvashow.appspot.com
- rvaserver2.appspot.com
- store.risevision.com
- commondatastorage.googleapis.com
- googleapis.com
- talkgadget.google.com
- s3.amazonaws.com
- p.jwpcdn.com/6/5/jwpsrv.js (Only necessary if your Presentation includes videos)
- rackcdn.com

###Running Rise Player behind proxy
In case you are using a proxy and Java is not configured properly, it will prevent Rise Windows or Linux Player from running.
To make Java aware of the proxy, **create the environment variable _JAVA_OPTIONS** with the value in this form: 

```
-Dhttp.proxyHost=${httpProxyIP} -Dhttp.proxyPort=${httpProxyIP} -Dhttps.proxyHost=${httpsProxyIP} -Dhttps.proxyPort=${httpsProxyPort}
```

**Replace httpProxyIP** to the IP of the proxy (e.g. 111.111.111.111)

**Replace httpProxyPort** to the port of the proxy (e.g. 8080)

**The same applies to replacing the values for httpsProxyIP** and **httpsProxyPort**. Depending on your proxy configuration, the values for http and https could match.

Please note that if the _JAVA_OPTIONS environment variable exists, append these values at the end, including a whitespace before the first -D

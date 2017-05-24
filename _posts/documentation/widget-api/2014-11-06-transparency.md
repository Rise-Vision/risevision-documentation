---
layout: documentation-post
title:  "Transparency"
date:   2014-11-06 11:08:00
category: documentation/widget-api
parent-order: 0
order: 8
---

When creating a Widget, more often than not you will want it to be transparent so that any content that might appear beneath it (e.g. a background image), will still be visible. Fortunately, this is very easy to do.

In the CSS for the Widget, simply add the following:

```
body { background-color: transparent; }
```

To illustrate, here is what the RSS Widget might look like without transparency. Notice the white box around it:

<img src="http://www.risevision.com/wp-content/uploads/2011/10/NonTransparent.png" alt="Non-transparent Widget" style="width: 667px;"/>

Now, here’s the same Widget after making the background transparent:

<img src="http://www.risevision.com/wp-content/uploads/2011/10/Transparent.png" alt="Transparent Widget" style="width: 727px;"/>

If a Widget has its own background color setting, then transparency needs to be overridden in the code and replaced with the actual background color:

```
document.body.style.background = myBackgroundColor;
```
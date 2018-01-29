---
layout: documentation-post
title:  "Widget Parameters"
date:   2014-11-06 11:08:00
category: documentation/widget-api
parent-order: 0
order: 4
---

There are a few different parameters that are automatically passed to the Widget by the Viewer.

## The `id` Parameter
`id` is the unique ID of the Widget. There are usually multiple Widgets in a Presentation, so each Widget is assigned an `id` that the Viewer can use to distinguish between them.

Here's how to access the `id` parameter:

```
var id = new gadgets.Prefs().getString("id");
```

## The `rsW` and `rsH` Parameters
`rsW` and `rsH` indicate the width and height (in pixels) of the Placeholder into which the Widget has been placed. Keep in mind that `rsW` and `rsH` return a unitless number.

Here's how to access these parameters:

```
var prefs = new gadgets.Prefs(),
  rsW = prefs.getInt("rsW"),
  rsH = prefs.getInt("rsH");
```
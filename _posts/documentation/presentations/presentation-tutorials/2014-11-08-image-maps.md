---
layout: documentation-post
title:  "Image Maps"
date:   2014-11-08 11:21:00
category: documentation/presentations/presentation-tutorials
parent-order: 1
order: 7
---

Image maps can be thought of as hot spots within an image. They can be used to navigate to a different page of a Presentation when a particular part of an image is clicked. Image maps are somewhat involved, so if you are not already familiar with them, you may want to read [this article](http://www.elated.com/articles/creating-image-maps/) before going any further.

## Defining the Image Map
The first thing to be done is to determine the coordinates that define each of the hot spots. These can be found by opening the background image with MS Paint, placing the cursor over the image at different points that form the boundaries of the image map, and noting the coordinates. With coordinates in hand, the image map can then be created in the Presentation’s HTML. Here’s a snippet of what that might look like:

```
function initImageMap() {
  var backgroundImage = getPlaceholderIFrameIds("CampusNewsBackground")[0];
  var imageMap = {
    name: "tabs",
    areas: [
    {
      shape: "poly",
      coords: "0, 0, 218, 0, 212, 82, 0, 68",
      title: "CampusNews"
    },
    {
      shape: "poly",
      coords: "219, 0, 377, 0, 379, 75, 217, 82, 215, 45",
      title: "Events"
    }
    ]
  }

  if (backgroundImage) {
    document.getElementById(backgroundImage).contentWindow.addImageMap(imageMap);
  }
}
```

Let’s break this down to see what the code is doing. The first line is:

```
var backgroundImage = getPlaceholderIFrameIds("CampusNewsBackground")[0];
```

We’ve talked about `getPlaceholderIFrameIds` [before]({{site.absoluteurl}}documentation/presentations/presentation-tutorials/iframe-id). This line gets the first `iframe` that is inside the Placeholder named `CampusNewsBackground`. In this case, the first (and only) Item in that Placeholder is an image item containing the background image.

Next, the image map is defined. This is where the hot spot coordinates are used:

```
var imageMap = {
  name: "tabs",
  areas: [
  {
    shape: "poly",
    coords: "0, 0, 218, 0, 212, 82, 0, 68",
    title: "CampusNews"
  },
  {
    shape: "poly",
    coords: "219, 0, 377, 0, 379, 75, 217, 82, 215, 45",
    title: "Events"
  }
  ]
}
```

Finally, the image map is associated with the background image:

```
if (backgroundImage) {
  document.getElementById(backgroundImage).contentWindow.addImageMap(imageMap);
}
```

## Adding an Event Handler
So far, so good, but an event handler still needs to be setup up so that we know when a user clicks on one of the hot spots. That is accomplished by adding the following function:

```
function onImageClicked(id, title) {
  // Check parameters and do something.
}
```

The `id` parameter contains the ID of the image item, while the `title` parameter contains the value of `title` that was previously defined in the image map. (Incidentally, these parameters can be called anything you want.) What you do when a hot spot is clicked is entirely dependent on the nature of your particular Presentation.

The last thing left to do is call the `initImageMap` function after the Presentation has loaded:

```
<body style="height:1920px;width:1080px; margin: 0; overflow: hidden;" onLoad="initImageMap();">
```
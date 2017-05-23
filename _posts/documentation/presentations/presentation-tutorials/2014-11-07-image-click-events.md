---
layout: documentation-post
title:  "Image Click Events"
date:   2014-11-07 11:21:00
category: documentation/presentations/presentation-tutorials
parent-order: 1
order: 6
---

When building Presentations, you may find that you need something to happen when a user clicks on or touches an image. For example, the image might be a button that should show a different page of a multi-page Presentation. Never fear! There are not one, but two ways in which this can be accomplished.

## Using an Image Item
The first way is to use an image item. Simply add the image item as per usual, then include the following Javascript in the Presentation’s HTML:

```
function onClick(id) {
  // Code to handle clicking on an image.
}
```

This function will be called whenever an image is clicked. To determine exactly which image it was, the `id` parameter can be inspected and different code executed depending on its value.

The tricky part is in figuring out what the `id`s of each of the image items are. The easiest way to determine that is to add the following code to the `onClick` function:

```
function onClick(id) {
  console.log(id);
}
```

Now when the Presentation is previewed and an image is clicked, the `id` of that image will be displayed in the [DevTools Console](https://developer.chrome.com/devtools/docs/console).

## Using a Placeholder Background Image
The problem with using an image item is that if an image is moved to a different position in a Playlist, or to a completely different Placeholder, the `id` will change and the Javascript will no longer work as expected. A better alternative, and the one we recommend as a best practice, is to add an image as the background of a Placeholder. When an image is added in this way, a `<div>` tag gets added to the HTML, and an `onclick` attribute can be attached to it. Whenever the Placeholder is clicked, the code specified in `onclick` will fire:

```
<div id="ph0" placeholder="true" onclick="alert('I was clicked!');" ...></div>
```

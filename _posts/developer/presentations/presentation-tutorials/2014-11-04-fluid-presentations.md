---
layout: developer-post
title:  "Fluid Presentations"
date:   2014-11-04 11:21:00
category: developer/presentations/presentation-tutorials
parent-order: 1
order: 3
---

Have you ever tried resizing your browser window while previewing a Presentation? If you have, you may have noticed that your content doesn’t move. Everything stays where it is. That’s because the Presentation and all of its Placeholders use fixed dimensions. For example, a Presentation that has a resolution of 1024 x 768 will always be 1024 pixels wide and 768 pixels high, regardless of the resolution of the browser window.

## Creating a Fluid Presentation
Instead of assigning pixel-based dimensions to a Presentation and all of its Placeholders, you can instead assign percentage-based dimensions, thereby creating a fluid Presentation that will re-adjust as the resolution changes. What do you need to do to build a fluid Presentation? Create a new Presentation as you normally would, by clicking the Add button on the Presentations page (alternatively, you can open an existing Presentation that you’d like to convert). By default, this will create a Presentation that is 1920 x 1080. To change this to use percentages, go into the HTML view of the Presentation. Change the width and height values of the body tag to 100%:

<img src="assets/documentation/images/presentation-tutorials/responsive-body.png" alt="body tag" style="width: 571px;"/>

When you return to Design view, you’ll notice that the scrollbars have disappeared. That’s because the Presentation is now the same size as the editor window. If you inspect the Presentation Settings, you’ll see that its dimensions are 100% by 100%:

<img src="assets/documentation/images/presentation-tutorials/presentation-settings.png" alt="Presentation Settings" style="width: 331px;"/>

## Creating Fluid Placeholders

When you add a new Placeholder to the Presentation, the Placeholder is still expecting pixels for *Width*, *Height*, *Top* and *Left*:

<img src="assets/documentation/images/presentation-tutorials/placeholder-properties.png" alt="Placeholder Properties" style="width: 379px;"/>

For now, we’ll just accept these default values. You can drag the Placeholder around to position it. Once you are satisfied with its placement, you’ll need to switch once more to HTML view, and look for the Placeholder in the markup. In the example below, a Placeholder named `ph0` is 400px by 200px and is located 100 pixels from the left and 100 pixels from the top:

<img src="assets/documentation/images/presentation-tutorials/placeholder-dimensions.png" alt="Placeholder HTML" style="width: 696px;"/>

Now for the bad news – we’ll need to do some math. To calculate a percent value for the width, we need to divide the pixel width of the Placeholder by the original pixel width of the Presentation, and then multiply the result by 100. Our formula looks like this:

*Placeholder Width (px) / Presentation Width (px) = Placeholder Width (%)*

You may remember that the original dimensions of the Presentation were 1920 x 1080, so that gives us a result of 400 / 1920 * 100 = 20.833333333333%. You may be tempted to round this value, but it’s better not to. The editor will round it to 4 decimal places.

You would use a similar formula to calculate the new height:

*Placeholder Height (px) / Presentation Height (px) = Placeholder Height (%)*

In our example, the new Placeholder height is 18.518518518519% ( 200 / 1080 * 100).

The left and top values are calculated in a similar manner:

*Placeholder Left (px) / Presentation Width (px) = Placeholder Left (%)*
*Placeholder Top (px) / Presentation Height (px) = Placeholder Top (%)*

With our percent-based dimensions in hand, we can substitute them for the pixel-based values:

<img src="assets/documentation/images/presentation-tutorials/placeholder-percents.png" alt="Placeholder Dimensions" style="width: 766px;"/>

Now the Placeholder is using percentages instead of pixels:

<img src="assets/documentation/images/presentation-tutorials/new-properties.png" alt="Placeholder Properties" style="width: 230px;"/>

## Adding Content
Now that you have a fluid Presentation and Placeholders, you can go ahead and add some content to those Placeholders. Videos and images support fluid dimensions, so if you add any of these components to a Placeholder, they will resize as the browser window shrinks or expands.
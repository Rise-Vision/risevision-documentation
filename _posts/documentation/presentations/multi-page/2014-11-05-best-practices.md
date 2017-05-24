---
layout: documentation-post
title:  "Best Practices"
date:   2014-11-05 11:08:00
category: documentation/presentations/multi-page
parent-order: 0
order: 4
---

We’ve built our fair share of what we like to call “multi-page” Presentations; that is, Presentations where Widgets and other content are displayed only after touching a button or some other UI element. As a result, we’ve formulated some best practices based on our experiences that we think will benefit you as well. Here is our list of recommendations:

- When adding an image to a Presentation that must execute some code when clicked (e.g. a button), use a Placeholder with a background image and attach an `onclick` attribute to the resulting `div` tag.
- Instead of using an empty Placeholder in a Presentation (i.e. a Placeholder with no Playlist items and no background image) either:
  - Don’t create it as a Placeholder and instead add the `div` tag directly to the HTML and style it with CSS, or
  - Create it as a Placeholder so that the CSS is automatically generated, but then remove the `placeholder="true"` attribute. This will remove clutter from the Design view and kick out empty Placeholders.
- If a Placeholder should not appear on the first page of the Presentation, uncheck its *Visible* property. This will hide the Placeholder and pause all of its Widgets when the Presentation first loads.
- When a different page of the Presentation is selected, all Widgets on the page that is now invisible should be paused and those on the newly visible page should be started.
- Where possible, place Javascript code just before the closing `body` tag.
- It is best to comment any Javascript that appears in the HTML. This will make it easier to maintain the Presentation going forward.
- Only include code in a Presentation that is actually needed. It is not a good idea to copy the same code from Presentation to Presentation, as what was needed in one might not be needed in another.
- Using the Chrome Developer Tools, check the console for errors and resolve any that are directly related to the Presentation.

Follow these best practices and you’ll be sure to create some amazing multi-page Presentations!
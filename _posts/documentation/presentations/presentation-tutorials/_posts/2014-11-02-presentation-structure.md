---
layout: documentation-post
title:  "Structure of a Presentation"
date:   2014-11-02 11:21:00
category: documentation/presentations/presentation-tutorials
parent-order: 1
order: 1
---

## CSS
To embed CSS in a Presentation, add a `<style>` tag between the opening and closing `<head>` tags:

```
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title></title>
  <style type="text/css">
    // Put your CSS here.
  </style>
</head>
```

Note that the `type` attribute is optional as CSS is assumed to be the default type for a `<style>` tag.

The CSS file can also be hosted elsewhere and linked to in the `<head>` tag:

```
<head>
  <meta http-equiv="content-type" content="text/html; charset=UTF-8">
  <title></title>
  <link rel="stylesheet" href="path/to/style.css">
</head>
```

## HTML
Any custom HTML that gets added to a Presentation should be placed within the opening and closing `<body>` tags. To add some custom HTML inside of a Placeholder, put it between that Placeholder’s opening and closing `<div>` tags:

```
<div id="wobble" placeholder="true" style="width:118px;height:31px;left:140px;top:160px;z-index:0;position:absolute;">
  <div id="wobbleButton">Touch Me</div>
</div>
```

## Javascript and jQuery
Javascript and jQuery code are defined inside of a `<script>` tag and can be included in both the `<head>` and `<body>` sections of the Presentation, although we generally recommend including it just before the closing `<body>` tag:

```
<body>
  <!-- Some HTML here. -->
  <script type="text/javascript">
    // Some Javascript here.
  </script>
</body>
```

Again, the `type` attribute is optional as `text/javascript` is the default.

To link to an external Javascript file, add the following:

```
<script src="path/to/script.js"></script>
```

When using jQuery, it’s not necessary to include the jQuery library in the Presentation, as the Viewer loads it when it runs.
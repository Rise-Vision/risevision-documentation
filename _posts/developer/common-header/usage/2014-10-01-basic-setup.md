---
layout: developer-post
title:  "Basic Setup"
date:   2014-10-01 10:52:00
category: developer/common-header/usage
parent-order: 0
order: 1
---

In order to use Common Header in your Angular app, you need to do all of the following:

* Include module ```risevision.common.header``` as a dependency of your AngularJS app.
* Add the following directive to your app:

```html
  <common-header nav-options="navOptions"></common-header>
```

* Add a scope variable ```navOptions``` to the scope that contains the common-header directive, e.g.:

```js
$scope.navOptions = [{
          title: 'Link 1',
          link: '#/link1'
        },
        {
          title: 'About',
          link: '#/about'
        },
        ...]
```
And you are done.

---
layout: developer-post
title:  "userState"
date:   2014-10-01 10:52:00
category: developer/common-header/usage
parent-order: 0
order: 2
---

```userState``` is an AngularJS singleton that stays at the core of Common Header infrastructure.

```userState``` is responsible for retrieving and retaining authentication tokens, user profile, user company and Google Oauth2 information throughout the lifecycle of your CH-enabled single-page application.


As an effort to combat [global mutable states](http://programmers.stackexchange.com/a/148109), most of ```userState```'s internal varibles,
such as those that hold current user's identity and the currently selected company,
are hidden and protected by [closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures). This guarantees that user-related states are not directly modifiable by external JavaScript code (with only a few exceptions such as the currently selected company, which is altered through user actions).

However, if you find this is not sufficient for your development needs or wish to alter the internal behaviour of ```userState```,
please submit an issue or [fork & send a pull request to Common Header](https://github.com/Rise-Vision/common-header).

### User-related Methods

#### userState.authenticate(forceAuth)

Check user's authentication status.

####Parameters

| Name    | Type   | Required | Default Value | Description |
|:--------|:-------|:--------:|:--------------|:------------|
| **forceAuth**  | boolean |  NO  | false | Whether to show an OAuth2 dialog when user is not signed in. ||

##### Return value

Returns a promise that resolves when an authorized state is achieved, or rejects when authorization fails.

***

#### userState.signOut(signOutGoogle)

Log the current user out of Rise Vision.

####Parameters

| Name    | Type   | Required | Default Value | Description |
|:--------|:-------|:--------:|:--------------|:------------|
| **signOutGoogle**  | boolean |  NO  | false | Whether to sign out of the user's Google account as well. ||

Returns a promise that resolves when sign-out is successful, or rejects when sign-out fails.

***

#### userState.getCopyOfProfile

Get a reactive copy of user profile.

##### Return value

Returns an object that inherits the prototype chain of the user profile object (sealed by clojure inside ```userState```). The returned object automatically updates itself when the profile of the current user changes.

***

#### userState.isLoggedIn

Returns a boolean that indicates whether the current user is logged in with OAuth2.

***

#### userState.isRiseVisionUser

Returns ```true``` if the current user is a registered Rise Vision user. Returns ```false``` otherwise or if the user is not logged in.

***

#### userState.isUserAdmin

Returns ```true``` if the current user is a company user administrator. Returns ```false``` otherwise or if the user is not logged in.

***

#### userState.isRiseStoreAdmin

Returns ```true``` if the current user is a Store administrator. Returns ```false``` otherwise or if the user is not logged in.

***

#### userState.isPurchaser

Returns ```true``` if the current user is able to purchase a product from Store. Returns ```false``` otherwise or if the user is not logged in.

***

#### userState.isUserAdmin

Returns ```true``` if the current user is a company user administrator. Returns ```false``` otherwise or if the user is not logged in.

***

#### userState.isSeller

Returns ```true``` if the current user is a registered Rise Vision seller. Returns ```false``` otherwise or if the user is not logged in.

***

### Company-related Methods


#### userState.getCopyOfUserCompany

Get a reactive copy of the company the current user belongs to.

#### Return value

Returns an object that inherits the prototype chain of the company object the current user belongs to (sealed by clojure inside ```userState```). The returned object automatically updates itself when the profile of the current user changes.

***

#### userState.getCopyOfSelectedCompany

Get a reactive copy of the company the current user belongs to.

#### Return value

Returns an object that inherits the prototype chain of the currently selected company object (sealed by clojure inside ```userState```). The returned object updates itself when the currently selected company changes.

***

#### userState.switchCompany

| Name    | Type   | Required | Default Value | Description |
|:--------|:-------|:--------:|:--------------|:------------|
| **company**  | object |  **YES**  | false | The new company object to switch to. ||

Switches currently selected company to the one specified by the ```company``` parameter.

***

#### userState.getUserCompanyId

Returns the ID of the company the current user belongs to.

***

#### userState.getSelectedCompanyId

Returns the ID of the currently selected company.

***

#### userState.getSelectedCompanyName

Returns the name of the company the current user belongs to.


***

#### userState.isSubcompanySelected

Returns ```true``` if the currently selected company is a subcompany of the company the current user beongs to. Returns ```false``` when the currently selected company is the user company, or if the user is not logged in.

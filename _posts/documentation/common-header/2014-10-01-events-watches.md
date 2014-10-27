---
layout: post
title:  "Events & Watches"
date:   2014-10-01 10:52:00
category: documentation/common-header
parent-order: 0
order: 3
---


## Event Models

In order to encourage a more reactive and declarative style of coding, Common Header enables the use of either one of the two methods to monitor change in user-related states.

### Method One: Apply ```$scope.$watch()``` to ```userState``` methods

Then in the $watch() callback statement, populate the watched variables onto your local scope.

To some, this may look a little cumbersome at first, but would make sense if one adheres to the practice of modularization and the principle of separation of concerns.

Below are a list of common tasks, along with code patterns:

#### Detect Current User
Put a ```$scope.$watch()``` on ```userState.getCurrentUsername()```:

```js
$scope.$watch(function() { return userState.getCurrentUsername(); },
   function (username) {
   $scope.username = username; //put username on scope
   if(username) { // a new current user: update states
                  // associated with the user accordingly
      ... // alter scope variables based on current username
   }
   else { //no current user: the user is either logged out or has not been populated
      ...
   }
});

$scope.$watch(function() { return userState.isLoggedIn(); },
   function (is) {
   $scope.isLoggedIn = is; //put on scope
});
```
Then in templates, one would write like this:

```html
<div ng-show="userState.user">
  Welcome, {{username}}!
</div>
<div ng-show="!isLoggedIn">
  Sorry, you are not logged in.
</div>
```

#### Detect If Current User Is A Registered Rise Vision User

```js
$scope.$watch(function() { return userState.isRiseVisionUser(); },
   function (is) {
   $scope.isRiseVisionUser = is;
   if(is) {
      ...
   }
   else {  // not a registered rise vision user
      ...
   }
});
```

```html
<div ng-show="isRiseVisionUser">
  Welcome, Rise Vision User!
</div>
<div ng-show="!isRiseVisionUser">
  Sorry, you must first register as a Rise Vision user to see this content.
</div>
```

#### Detect Current Selected Company

```js
$scope.selectedCompany = userState.getCopyOfSelectedCompany(); //this object updates itself when selected company changes
```

```html
<div ng-show="selectedCompany.id">
  Your current company is {{selectedCompany.name}}!
</div>
<div ng-show="!selectedCompany.id">
  You haven't selected a company yet or you have not logged in.
</div>
```

### Method Two: Subscribe to ```$rootScope``` Events

Available events:
***
#### ```'risevision.user.authorized'```

Fires whenever a user is authorized (forced & unforced)

***
#### ```'risevision.user.userSignedIn'```

Fires when a user has explicitly signed in.

***
#### ```'risevision.user.signedOut'```

Fires when a user is signed out.

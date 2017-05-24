---
layout: documentation-post
title:  "Events & Watchers"
date:   2014-10-01 10:52:00
category: documentation/common-header
parent-order: 0
order: 4
---

## Event Models

In order to encourage a more reactive and declarative style of coding, Common Header enables the use of either one of the two methods to monitor change in user-related states.

### Method One: Subscribe to ```$rootScope.$broadcast``` Events

This is the preferable method as it has got better performance over Watchers. It is also simpler to use.

The following is a sample statement for listen to an event. Just replace EVENT_NAME for one of the events listed below.

```javascript
$rootScope.$on("EVENT_NAME", function() {	
    // add in here actions to happen when event is fired
});
```

##### Detect When User has been authorized

```javascript
$rootScope.$on("risevision.user.authorized", function() {	
    // add in here actions to happen when user has been authorized
});
```

##### Available events:
***
#### ```'risevision.user.authorized'```

Fires whenever a user is authorized (forced & unforced)

***
#### ```'risevision.user.userSignedIn'```

Fires when a user has explicitly signed in (forced).

***
#### ```'risevision.user.signedOut'```

Fires when a user is signed out.

***
#### ```'risevision.company.selectedCompanyChanged'```

Fires when User’s Company/Sub-Company have been initialized and when a Sub-Company is selected

***
#### ```'risevision.company.updated'```

Fires when the Selected Company info is updated/modified by Users

***
#### ```'risevision.user.updated'```

Fires on Save in User Settings modal when user edits its own profile.


### Method Two: Apply ```$scope.$watch()``` to ```userState``` methods 

**\*Use this method with caution as it decreases performance\***

Then in the $watch() callback statement, populate the watched variables onto your local scope.

Below is a common tasks, along with code patterns:

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

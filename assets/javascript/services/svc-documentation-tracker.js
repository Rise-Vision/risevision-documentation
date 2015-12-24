'use strict';

angular.module('risevision.documentation')
  .factory('documentationTracker', ['userState', 'segmentAnalytics',
    function (userState, segmentAnalytics) {

      return function (eventName) {
        if (eventName) {
          segmentAnalytics.track(eventName);
        }
      };

      $scope.promoBannerClicked = function (productName, source, userIsSignedIn, inRVAFrame)
         segmentAnalytics.track("Promotional Banner Clicked", {
          "Product Name": productName,
          "Source": source,
          "user Signed In": userIsSignedIn,
          "inApp": inRVAFrame
        });
         
      }
  ]);

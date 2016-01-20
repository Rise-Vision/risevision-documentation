'use strict';

angular.module('risevision.documentation')
  .factory('documentationTracker', ['segmentAnalytics',
    function (segmentAnalytics) {
      return function (eventName) {
        if (eventName) {
          segmentAnalytics.track(eventName, productName, source);
           "Product Name": productName,
           "Source": source,
           "user Signed In": userIsSignedIn,
           "inApp": userState.inRVAFrame(),
           "companyId": userState.getSelectedCompanyId()
        }
      };
    }
  ]);

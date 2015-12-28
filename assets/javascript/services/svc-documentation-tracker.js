'use strict';

angular.module('risevision.documentation')
  .factory('documentationTracker', ['userState', 'segmentAnalytics',
    function (userState, segmentAnalytics) {
      return function (eventName, productName, source) {
        if (eventName) {
          segmentAnalytics.track(eventName, {
            "Product Name": productName,
            "Source": source,
            "user Signed In": userIsSignedIn,
            "inApp": userState.inRVAFrame(),
            "companyId": userState.getSelectedCompanyId()
          });
        }
      };
    }
  ]);

'use strict';

angular.module('risevision.documentation')
  .factory('documentationTracker', ['userState', 'segmentAnalytics',
    function (userState, segmentAnalytics) {
      return function (eventName) {
        if (eventName) {
          segmentAnalytics.track(eventName, {
            companyId: userState.getSelectedCompanyId()
          });
        }
      };
    }
  ]);

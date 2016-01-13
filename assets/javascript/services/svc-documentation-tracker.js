'use strict';

angular.module('risevision.documentation')
  .factory('documentationTracker', ['segmentAnalytics',
    function (segmentAnalytics) {
      return function (eventName) {
        if (eventName) {
          segmentAnalytics.track(eventName);
        }
      };
    }
  ]);

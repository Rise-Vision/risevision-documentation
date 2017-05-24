'use strict';

angular.module('risevision.documentation')
  .factory('documentationTracker', ['segmentAnalytics',
    function (segmentAnalytics) {
      return function (eventName,properties) {
        if (eventName) {
          segmentAnalytics.track(eventName,properties);
        }
      };
    }
  ]);

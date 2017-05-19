/**
 * Created by rodrigopavezi on 11/25/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .factory("appActivity", ["$q", "$log", "DevHubCache", "getActivity", function($q, $log, DevHubCache, getActivity) {
        return function(app) {
            var deferred = $q.defer();
            var cacheId = "activity-"+app.id;
            var activityFromCache = DevHubCache.get(cacheId);
            if (!activityFromCache) {
                var CORE_API = "CoreAPIv1";
                if (app.clientId) {
                    return getActivity(app.clientId, CORE_API)
                        .then(function (activity) {

                            app.activity = activity;
                            DevHubCache.put(cacheId, activity);

                            deferred.resolve(true);

                        }, function (errorResult) {
                            $log.debug("Error: " + errorResult);
                            deferred.reject(errorResult);
                        });
                } else{
                    deferred.resolve(true);
                }
            }else{
                app.activity = activityFromCache;
                deferred.resolve(true);
            }
            return deferred.promise;
        }
    }]);
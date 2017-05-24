/**
 * Created by rodrigopavezi on 11/25/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .factory("appCompany", ["$q","DevHubCache","getCompany", function($q, DevHubCache,getCompany) {
        return function(app) {
            var deferred = $q.defer();
            var cacheId = "company-"+app.companyId;
            var companyFromCache = DevHubCache.get(cacheId);
            if(!companyFromCache) {
                return getCompany(app.companyId)
                    .then(function (company) {
                        app.company = company;
                        DevHubCache.put(cacheId, company);

                        deferred.resolve(true);
                    }, function (errorResult) {
                        $log.debug("Error: " + errorResult);
                        deferred.reject(errorResult);
                    });
            }else{
                app.company = companyFromCache;
                deferred.resolve(true);
            }

            return deferred.promise;
        }
    }]);
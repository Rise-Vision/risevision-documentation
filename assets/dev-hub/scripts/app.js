"use strict";
angular.module("risevision.developer.hub")
    .config(["uiStatusDependencies", function (uiStatusDependencies) {
        uiStatusDependencies.addDependencies({
            "hasManagementRoles": "registeredAsRiseVisionUser",
            "canAddApps": "hasManagementRoles",
            "canEditApps": "hasManagementRoles",
            "canAccessList": ""
        });
    }])
    .factory("hasManagementRoles", ["$q", "getUserProfile", "userState", "$log", function ($q, getUserProfile, userState, $log) {
        return function () {
            var deferred = $q.defer();
            getUserProfile(userState.getUsername()).then(function (profile) {
                var USER_ADMINISTRATOR = "ua";
                var DEVELOPER = "de";
                var roles = profile.roles;
                var hasRole = false;

                for (var i = 0; i < roles.length; i++){
                    if(roles[i] === USER_ADMINISTRATOR || roles[i] === DEVELOPER){
                        hasRole = true;
                    }
                }
                if(hasRole){
                    deferred.resolve(true);
                }else{
                    $log.debug("hasManagementRoles rejected as user does not have necessary role");
                    deferred.reject("hasManagementRoles");
                }
            });
            return deferred.promise;
        };
    }])
    .factory('DevHubCache', ['$cacheFactory', function ($cacheFactory) {
        return $cacheFactory('DevHubCache');
    }]);

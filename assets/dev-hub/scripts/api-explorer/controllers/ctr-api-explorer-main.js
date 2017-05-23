/**
 * Created by rodrigopavezi on 11/20/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("ApiExplorerMainController",
    ["$rootScope", "$scope", "$state", "$log", "getRest", "$http",
        function($rootScope, $scope, $state, $log, getRest, $http){

            $scope.documentationUrl = "http://developer.risevision.com/documentation/core-api/"

            $http.get('/assets/dev-hub/data/descriptions.json').success (function(data) {
                $rootScope.descriptions = data;
            });

            $http.get('/assets/dev-hub/data/metatags.json').success (function(data) {
                $rootScope.metatag = data["api-explorer"];
            });

            var listResourcesResult = getRest("core","v1")
                .then(function (api) {
                    $rootScope.resources = api.resources;
                }, function (errorResult) {
                    $log.debug("Error: " + errorResult.code + " - " + errorResult.message);
                });

    }]);

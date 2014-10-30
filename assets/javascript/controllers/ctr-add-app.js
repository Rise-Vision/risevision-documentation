/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("AddAppController",
    ["$scope", "$state", "$timeout", "createApp", "userState", "$modal",
    function($scope, $state, $timeout, createApp, userState, $modal){

        $scope.info = function() {
            $modal.open({
                templateUrl: 'apps/client-id-info.html'
            });
        };

        $scope.save = function(app) {
            createApp(userState.getUserCompanyId(), userState.getUsername(), app).then(function(result) {
                $state.go("apps.list");
            });
        }
    }])
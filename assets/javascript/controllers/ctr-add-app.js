/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("AddAppController",
    ["$scope", "$state", "$timeout", "createApp", "userState",
    function($scope,$state, $timeout, createApp, userState){

        $scope.save = function(app) {
            createApp(userState.getUserCompanyId(), userState.getUsername(), app).then(function(result) {
                $state.go("apps.list");
            });
        }
    }])
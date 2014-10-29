/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("AddAppController",
    ["$scope", "$state", "$timeout", "createApp", "userState",
    function($scope,$state, $timeout, createApp, userState){
        $scope.alerts = [];
        var successAlert = {type: 'success', msg: 'App added successfully!'};

        $scope.save = function(app) {
            createApp(userState.getUserCompanyId(), userState.getUsername(), app).then(function(result) {
                if($scope.alerts.indexOf(successAlert) == -1){
                    $scope.alerts.push(successAlert);
                }

                $timeout( function() {
                    $scope.alerts.splice($scope.alerts.indexOf(successAlert), 1);
                }, 2000);

                $state.go("apps");
            });
        }

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }])
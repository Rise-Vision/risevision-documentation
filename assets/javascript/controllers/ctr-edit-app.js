/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("EditAppController",
    ["$scope", "$location", "$routeParams", "$timeout", "getApp", "updateApp",
    function($scope,$location, $routeParams, $timeout, getApp, updateApp){
        $scope.alerts = [];
        var successAlert = {type: 'success', msg: 'App edited successfully!'};

        getApp($routeParams.id).then(function (app) {
            $scope.app = app;
        });

        $scope.save = function(app) {

            updateApp($routeParams.id,app).then(function(resp){
                if($scope.alerts.indexOf(successAlert) == -1){
                    $scope.alerts.push(successAlert);
                }

                $timeout( function() {
                    $scope.alerts.splice($scope.alerts.indexOf(successAlert), 1);
                }, 2000);
            });
        }

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
    }])
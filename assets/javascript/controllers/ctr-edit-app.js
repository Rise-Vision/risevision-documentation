/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("EditAppController",
    ["$scope", "$state", "$stateParams", "$timeout", "getApp", "updateApp",    function($scope,$state, $stateParams, $timeout, getApp, updateApp){

        getApp($stateParams.id).then(function (app) {
            $scope.app = app;
        });

        $scope.save = function(app) {

            updateApp($stateParams.id,app).then(function(resp){
                $state.go("apps.list");
            });
        }

    }])
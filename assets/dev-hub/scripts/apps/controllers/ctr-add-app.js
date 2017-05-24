/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("AddAppController",
    ["$scope", "$state", "$timeout", "createApp", "userState", "$modal", "$log", "errorInfo",
    function($scope, $state, $timeout, createApp, userState, $modal, $log, errorInfo){

        $scope.info = function() {
            $modal.open({
                templateUrl: '/assets/dev-hub/partials/apps/client-id-info.html'
            });
        };

        $scope.save = function(app) {
            createApp(userState.getSelectedCompanyId(), userState.getUsername(), app).then(function(result) {
                $state.go("apps.list");
            }, function(errorResult) {
                $log.debug("Error: " + errorResult.code + " - " + errorResult.message);
                if(errorResult.message == "Client Id already exists!"){
                    $scope.showExistentClientIdMessage = true;
                }else{
                    errorInfo(errorResult.message);
                }

            });
        }

        $scope.hideExistentClientIdMessage = function(){
            $scope.showExistentClientIdMessage = false;
        }
    }])
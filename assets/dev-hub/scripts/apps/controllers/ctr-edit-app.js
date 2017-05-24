/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("EditAppController",
    ["$scope", "$state", "$stateParams", "$timeout", "getApp", "updateApp", "deleteApp", "$log", "$loading", "errorInfo", "$modal", "appActivity", "appCompany", "userState",
    function($scope,$state, $stateParams, $timeout, getApp, updateApp, deleteApp ,$log, $loading, errorInfo, $modal, appActivity, appCompany, userState){

        var loadApp = getApp($stateParams.id).then(function (app) {
            $scope.app = app;
            appActivity(app);
            appCompany(app);
        });

        //$loading.stopSpinnerAfterPromise("rv-dev-hub-app-loader", loadApp);

        $scope.save = function(app) {

            updateApp($stateParams.id,app).then(function(resp){
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

        var previousSelectedCompanyId = userState.getSelectedCompanyId();

        $scope.$watch(function () { return userState.getSelectedCompanyId(); },
            function (selectedCompanyId) {
                if(previousSelectedCompanyId !== selectedCompanyId){
                    $state.go("apps.list");
                }
            });

        $scope.hideExistentClientIdMessage = function(){
            $scope.showExistentClientIdMessage = false;
        }

        $scope.deleteApp = function (id) {

            var deleteConfirmationModalInstance = $modal.open({
                templateUrl: "/assets/dev-hub/partials/apps/delete_confirmation_modal.html",
                controller: function ($scope, $modalInstance) {

                    $scope.ok = function () {
                        $modalInstance.close();
                    };

                    $scope.cancel = function () {
                        $modalInstance.dismiss('cancel');
                    };
                },
                size: "sm"
            });

            deleteConfirmationModalInstance.result.then(function () {
                deleteApp(id).then(function(result) {
                    $state.go("apps.list");
                }, function(errorResult) {
                    $log.debug("Error: " + errorResult.code + " - " + errorResult.message);
                    errorInfo(errorResult.message);
                });
            });
        };
    }])

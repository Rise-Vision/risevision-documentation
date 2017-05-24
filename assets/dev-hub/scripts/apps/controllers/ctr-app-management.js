/**
 * Created by rodrigopavezi on 10/15/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("AppManagementController",
    ["$scope", "$state","listApps", "appActivity", "appCompany","userState", "$loading", "uiFlowManager","$log", function($scope, $state, listApps, appActivity, appCompany,userState, $loading, uiFlowManager, $log){

        $scope.apps = [];
        $scope.showNoAppMessage = true;
        $scope.loadingComplete = false;
        $scope.sortReverse = false;
        var _id = "";



        $scope.sortBy = function(category){
            $scope.sortByCat = category;
            $scope.sortReverse = !$scope.sortReverse;
        }

        var toogleMessageAndTable = function(){
            if($scope.apps != null && $scope.apps.length > 0){
                $scope.showNoAppMessage = false;
                $scope.showAppTable = true;
            }else{
                $scope.showNoAppMessage = true;
                $scope.showAppTable = false;
            }
        };

        $scope.addNewApp = function() {
            uiFlowManager.invalidateStatus("canAddApps");
        };

        var getApps = function(selectedCompanyId) {
            //$loading.start("rv-dev-hub-apps-loader");
            var listAppsResult = listApps()
                .then(function (apps) {
                    $scope.apps = apps;
                    getCompleteApp();
                    $scope.loadingComplete = true;
                    toogleMessageAndTable();
                    $loading.stop("rv-dev-hub-apps-loader");
                }, function () {
                    $scope.loadingComplete = true;
                    $loading.stop("rv-dev-hub-apps-loader");
                });
        }


       var getCompleteApp = function () {
           var promises = [];
           for(var key in $scope.apps){
                var app = $scope.apps[key];
                promises[promises.length] = appCompany(app);
                promises[promises.length] = appActivity(app);
            }

           //$loading.stopSpinnerAfterPromise("rv-dev-hub-apps-loader", promises);
        }

        $scope.$watch(function () { return uiFlowManager.getStatus(); },
            function (newStatus){
                if(newStatus) {
                    console.log("Status: "+ newStatus)

                    if(newStatus === "hasManagementRoles") {
                        uiFlowManager.cancelValidation();
                        uiFlowManager.invalidateStatus("canAccessList");
                        $state.go("apps.withoutPermission");
                    }else if (newStatus === "canAddApps"){
                        uiFlowManager.invalidateStatus("canAccessList");
                        $state.go("apps.add");
                    }else if (newStatus === "canEditApps"){
                        uiFlowManager.invalidateStatus("canAccessList");
                        $state.go("apps.edit", {id: _id});
                    }
                }
            });


        $scope.$watch(function () { return userState.getSelectedCompanyId(); },
            function (selectedCompanyId) {
                getApps(selectedCompanyId);
            });

        $scope.editApp = function(id) {
            _id = id;
            uiFlowManager.invalidateStatus("canEditApps");
        };

    }]);
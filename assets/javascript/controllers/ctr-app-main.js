/**
 * Created by rodrigopavezi on 10/22/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("MainAppController",
    ["$scope", "$state", "userState", "$loading", "uiStatusManager",function($scope, $state, userState, $loading, uiStatusManager) {

        if(userState.isLoggedIn()){
            $state.go("apps.list");
        }else{
            $state.go("apps.registration");
        }


        $scope.registerAnApp = function() {

            if(userState.isLoggedIn()){
                $state.go("apps.add");
            }else{
                $state.go("apps.userSignin");
            }
        }

        $scope.$watch(function () { return uiStatusManager.getStatus(); },
            function (newStatus){
                if(newStatus) {
                    if(newStatus === "canManageApps") {
                        $state.go("apps.add");
                    }
                }
        });

        $scope.registerDeveloper = function() {
            $loading.startGlobal("auth-buttons-login");
            userState.authenticate(true).then().finally(function(){
                $loading.stopGlobal("auth-buttons-login");
                uiStatusManager.invalidateStatus("canManageApps");
            });
        }
    }]);
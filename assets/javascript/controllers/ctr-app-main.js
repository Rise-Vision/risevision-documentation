/**
 * Created by rodrigopavezi on 10/22/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("MainAppController",
    ["$scope", "$state", "userState", "$loading", "uiStatusManager",function($scope, $state, userState, $loading, uiStatusManager) {

        console.log("here");
        uiStatusManager.invalidateStatus("canManageApps");


        $scope.registerAnApp = function() {

            if(userState.isLoggedIn()){
                uiStatusManager.invalidateStatus("canManageApps");
            }else{
                $state.go("apps.userSignin");
            }
        }

        $scope.$watch(function () { return uiStatusManager.getStatus(); },
            function (newStatus){
                if(newStatus) {
                    if(newStatus === "canManageApps") {
                        $state.go("apps.list");
                    }else{
                        $state.go("apps.registration");
                    }
                }
        });

       /* $scope.loginModal = function() {
            userState.authenticate(true).then().finally(function(){
                uiStatusManager.invalidateStatus("canManageApps");
            });
        };



        $scope.$watch(function () { return uiStatusManager.getStatus(); },
            function (newStatus){
                if(newStatus) {
                    //render a dialog based on the status current UI is in
                    if(newStatus === "signedInWithGoogle") {
                        $scope.loginModal();
                    }
                }
            });
         */

        $scope.registerDeveloper = function() {
            $loading.startGlobal("auth-buttons-login");
            userState.authenticate(true).then().finally(function(){
                $loading.stopGlobal("auth-buttons-login");
                uiStatusManager.invalidateStatus("canManageApps");
            });
        }
    }]);
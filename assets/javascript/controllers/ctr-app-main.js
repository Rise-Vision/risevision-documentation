/**
 * Created by rodrigopavezi on 10/22/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("MainAppController",
    ["$scope", "$state", "userState", "$loading", "uiStatusManager",function($scope, $state, userState, $loading, uiStatusManager) {


        $scope.registerAnApp = function() {
            uiStatusManager.invalidateStatus("canManageApps");
            watchStatus(registerHandler);
        }

        function watchStatus(handler) {
            $scope.$watch(function () { return uiStatusManager.getStatus(); },
                function (newStatus){
                    if(newStatus) {
                        handler(newStatus);
                    }
            });
        }

        function registerHandler(status){
            if(status === "canManageApps") {
                $state.go("apps.list");
            }else{
                $state.go("apps.userSignin");
            }
        }
        function loginHandler(status){
            if(status === "canManageApps") {
                $state.go("apps.list");
            }else{
                $state.go("apps.withoutPermission");
            }
        }


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
                watchStatus(loginHandler);
            });
        }
    }]);
"use strict";
angular.module("risevision.developer.hub",["ui.router","ngRoute","risevision.common.header","JSONedit", "pascalprecht.translate", "risevision.common.app"])
    .config(["uiStatusDependencies", function (uiStatusDependencies) {
        uiStatusDependencies.addDependencies({
            "hasManagementRoles": "registerdAsRiseVisionUser",
            "canManageApps": "hasManagementRoles"
        });
    }])
    .factory("canManageApps", ["$q", function ($q) {
        return function () {
            var deferred = $q.defer();
            deferred.resolve(true);
            return deferred.promise;
        };
    }])
    .factory("hasManagementRoles", ["$q", "getUserProfile", "userState", "$log", function ($q, getUserProfile, userState, $log) {
        return function () {
            var deferred = $q.defer();
            getUserProfile(userState.getUsername()).then(function (profile) {
                var USER_ADMINISTRATOR = "ua";
                var DEVELOPER = "de";
                var roles = profile.roles;
                for (var i = 0; i < roles.length; i++){
                    if(roles[i] === USER_ADMINISTRATOR || roles[i] === DEVELOPER){
                        deferred.resolve(true);
                    }
                }
                $log.debug("hasManagementRoles rejected as user does not have necessary role");
                deferred.reject("hasManagementRoles");
            });
            return deferred.promise;
        };
    }])
    .config([
        "$interpolateProvider", function($interpolateProvider) {
            return $interpolateProvider.startSymbol("{(").endSymbol(")}");
        }
    ])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'ADD_APP_TITLE': "Add a New App",
            'APP_NAME': "App Name",
            'APP_CLIENT_ID': "Client Id",
            'SAVE_BUTTON': "Save",
            'EDIT_BUTTON': "Edit",
            'APP_DESCRIPTION': "Description",
            'APP_URL': 'Url',
            'APP_NO_APP_YET_MESSAGE': "You haven't got an App yet!",
            'APP_ACTION': 'ACTION',
            'DELETE_BUTTON': "Delete",
            'APPS_TITLE': 'Rise Vision Apps',
            'APPS_SUBTITLE': 'Create your Rise Vision App using our API',
            'REGISTER_AN_APP': 'Register an App',
            'DEVELOPER_REGISTRATION_TEXT': 'Once you have registered, you can start building an app that you will be able to sell on our Store',
            'GETTING_STARTED_TITLE': 'Getting Started',
            'APP_REGISTRATION_DOCUMENTATION_LINK': 'How to register an Application',
            'RISE_VISION_STORE_LINK': 'Rise Vision Store',
            'REGISTER_AS_A_DEVELOPER_TITLE': 'Register as a Developer',
            'LOGIN_TO_REGISTER_TEXT': 'Sign in to your Rise Vision account to register',
            'LOGIN_WITH_GOOGLE_BUTTON': 'Sign in with Google',
            'DO_NOT_HAVE_ACCOUNT_LINK': "I don't have an account",
            'DO_NOT_HAVE_PERMISSION': "You must have permission to register apps. Please contact your System Administrator."
        });


        $translateProvider.preferredLanguage('en');
    }]);
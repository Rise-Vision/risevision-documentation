"use strict";
angular.module("risevision.developer.hub",["ui.router","ngRoute","risevision.common.header","JSONedit", "pascalprecht.translate", "risevision.common.app", "ui.bootstrap"])
    .config(["uiStatusDependencies", function (uiStatusDependencies) {
        uiStatusDependencies.addDependencies({
            "canManageApps": "registerdAsRiseVisionUser"
        });
    }])

    .factory("canManageApps", ["$q", function ($q) {
        return function () {
            var deferred = $q.defer();
            deferred.resolve(true);
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
            'APP_NAME': "Name",
            'APP_CLIENT_ID': "Client ID",
            'APP_DESCRIPTION': "Description",
            'APP_URL': 'URL',
            'APP_MODIFIED': 'Date Modified',
            'SAVE_BUTTON': "Save",
            'CANCEL_BUTTON': "Cancel",
            'EDIT_BUTTON': "Edit",
            'APPS': 'Apps',
            'APP_REGISTRATION': 'App Registration',
            'REGISTER_AN_APP': 'Register An App',
            'APP_NO_APP_YET_MESSAGE': "You haven't registered any apps yet",
            'APP_ACTION': 'ACTION',
            'DELETE_BUTTON': "Delete",
            'APPS_TITLE': 'Rise Vision Apps',
            'APPS_SUBTITLE': 'Create your Rise Vision App using our API',
            'DEVELOPER_REGISTRATION_TEXT': 'Once you have registered, you can start building an app that you will be able to sell on our Store',
            'GETTING_STARTED_TITLE': 'Getting Started',
            'APP_REGISTRATION_DOCUMENTATION_LINK': 'How to register an Application',
            'RISE_VISION_STORE_LINK': 'Rise Vision Store',
            'REGISTER_AS_A_DEVELOPER_TITLE': 'Register as a Developer',
            'LOGIN_TO_REGISTER_TEXT': 'Sign in to your Rise Vision account to register',
            'LOGIN_WITH_GOOGLE_BUTTON': 'Sign in with Google',
            'DO_NOT_HAVE_ACCOUNT_LINK': "I don't have an account"
        });


        $translateProvider.preferredLanguage('en');
    }]);
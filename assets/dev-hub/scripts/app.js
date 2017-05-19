"use strict";
angular.module("risevision.developer.hub",[
  "ui.router",
  "risevision.common.header",
  "ui.bootstrap",
  "ui.bootstrap.tpls", 
  "pascalprecht.translate", 
  "risevision.common.app", 
  "risevision.common.loading", 
  "risevision.common.apis",
  "risevision.common.core.endpoint",
  "risevision.common.components.analytics", 
  "risevision.common.monitoring.activity"
])
    .config(["uiStatusDependencies","$locationProvider", function (uiStatusDependencies, $locationProvider) {
        uiStatusDependencies.addDependencies({
            "hasManagementRoles": "registerdAsRiseVisionUser",
            "canAddApps": "hasManagementRoles",
            "canEditApps": "hasManagementRoles",
            "canAccessList": ""
        });
        $locationProvider.html5Mode(true);
    }])
    .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
        $rootScope
            .$on('$stateChangeSuccess',
            function(event){

                if (!$window.ga)
                    return;

                $window.ga('send', 'pageview', { page: $location.path() });
            });
    }])
    .factory("hasManagementRoles", ["$q", "getUserProfile", "userState", "$log", function ($q, getUserProfile, userState, $log) {
        return function () {
            var deferred = $q.defer();
            getUserProfile(userState.getUsername()).then(function (profile) {
                var USER_ADMINISTRATOR = "ua";
                var DEVELOPER = "de";
                var roles = profile.roles;
                var hasRole = false;

                for (var i = 0; i < roles.length; i++){
                    if(roles[i] === USER_ADMINISTRATOR || roles[i] === DEVELOPER){
                        hasRole = true;
                    }
                }
                if(hasRole){
                    deferred.resolve(true);
                }else{
                    $log.debug("hasManagementRoles rejected as user does not have necessary role");
                    deferred.reject("hasManagementRoles");
                }
            });
            return deferred.promise;
        };
    }])
    .factory('DevHubCache', function ($cacheFactory) {
        return $cacheFactory('DevHubCache');
    })
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'RV_DEVELOPER_HUB': 'Rise Vision Developer Hub',
            'RV_DEVELOPER_HUB_SUB_TITLE': 'Everything You Need to Create Apps and Publish Them on the Rise Vision Store',
            'ADD_APP_TITLE': "Add a New App",
            'APP_NAME': "Name",
            'APP_CLIENT_ID': "Client ID",
            'APP_DESCRIPTION': "Description",
            'APP_URL': 'URL',
            'APP_MODIFIED': 'Modified',
            'SAVE_BUTTON': "Save",
            'CANCEL_BUTTON': "Cancel",
            'EDIT_BUTTON': "Edit",
            'APPS': 'Apps',
            'APP_REGISTRATION': 'App Registration',
            'APP': 'App',
            'APP_COMPANY_NAME': 'Company',
            'APP_CREATED': 'Registered',
            'APP_FIRST_CALL': 'First Call',
            'APP_LAST_CALL': 'Last Call',
            'APP_AVERAGE_CALLS': 'AVG Calls',
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
            'LOGIN_TO_REGISTER_TEXT': 'You need to sign in to your Rise Vision account to register an app',
            'LOGIN_WITH_GOOGLE_BUTTON': 'Sign in With Google',
            'DO_NOT_HAVE_ACCOUNT_LINK': "I don't have an account",
            'DO_NOT_HAVE_PERMISSION': "You must have permission to register apps. Please contact your System Administrator.",
            'GET_INVOLVED': 'Get Involved',
            'GET_INVOLVED_DETAIL': 'Helping us improve developer docs, submitting issues, etc.',
            'GET_STARTED': 'Get Started',
            'DEVELOPER_DOCUMENTATION': 'Developer Documentation',
            'STYLE_GUIDE': 'Style Guide',
            'API_EXPLORER': 'API Explorer',
            'RV_CODEBASE': 'Rise Vision Codebase',
            'DEVELOPER_DOCS': 'Developer Documentation',
            'RESOURCE_NAME': 'Name',
            'RESOURCE_DESCRIPTION': 'Description',
            'RESOURCE_METHOD': 'Method',
            'RESOURCE_DOCUMENTATION_LINK': 'Documentation',
            'APPLY_BUTTON': 'Apply',
            'DELETE_CONFIRMATION': 'Are you sure you want to delete this app?',
            'DELETE_FOREVER_BUTTON': 'Delete Forever',
            'NAME_REQUIRED_ERROR': 'Name Is Required',
            'WRONG_CLIENT_ID_FORMAT': 'Wrong Client ID Format',
            'WRONG_URL_FORMAT': 'Wrong URL Format',
            'EXISTENT_CLIENT_ID': 'Client ID Already Exists'
        });


        $translateProvider.preferredLanguage('en');
    }]);
angular.module("risevision.common.config")
    .value("MONITORING_SERVICE_URL", "https://monitoring-dot-rvaserver2.appspot.com/_ah/api");
;

"use strict";
angular.module("risevision.documentation",["ui.router","risevision.common.header","JSONedit", "pascalprecht.translate", "ui.bootstrap","risevision.google-analytics"])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'DEVELOPER_DOCS': 'Developer Documentation',
            'USER_DOCS': 'User Documentation',
            'DEVELOPER': 'Developer',
            'USER': 'User'
        });


        $translateProvider.preferredLanguage('en');
    }])
    .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
        $rootScope
            .$on('$stateChangeSuccess',
            function(event){

                if (!$window.ga)
                    return;

                $window.ga('send', 'pageview', { page: $location.path() });
            });
    }]);
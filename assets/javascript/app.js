"use strict";
angular.module("risevision.documentation",["ui.router","risevision.common.header","JSONedit", "pascalprecht.translate", "ui.bootstrap"])

    .config([
        "$interpolateProvider", function($interpolateProvider) {
            return $interpolateProvider.startSymbol("{(").endSymbol(")}");
        }
    ])
    .config(['$translateProvider', function ($translateProvider) {
        $translateProvider.translations('en', {
            'DEVELOPER_DOCS': 'Developer Documentation'
        });


        $translateProvider.preferredLanguage('en');
    }]);
---
---
/**
 * Created by rodrigopavezi on 10/17/14.
 */

"use strict";
angular.module("risevision.developer.hub")
    .config (["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('apps', {
                template: "<div ui-view></div>",
                abstract: true
            })
            .state('apps.main', {
                url: '/apps',
                templateUrl: 'apps/apps.html',
                controller: 'MainAppController'
            })
            .state('apps.userSignin', {
                url: '/userSignin',
                templateUrl: 'apps/apps.userSignin.html',
                controller: 'MainAppController'
            })
            .state('apps.list', {
                url: '/list',
                templateUrl: 'apps/apps.list.html',
                controller: 'AppManagementController'
            })
            .state('apps.add', {
                url: '/add',
                templateUrl: 'apps/app-form.html',
                controller: 'AddAppController'
            })
            .state('apps.edit', {
                url: '/edit/:id',
                templateUrl: 'apps/app-form.html',
                controller: 'EditAppController'
            })
            .state('documentation', {
                url: '/documentation',
                templateUrl: 'documentation/documentation.html',
                controller: 'DocumentationController'
            })
            .state('post', {
                url: '/documentation/:category/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/documentation/" + params.category + "/" + params.post; },
                controller: 'DocumentationController'
            })


    }]);
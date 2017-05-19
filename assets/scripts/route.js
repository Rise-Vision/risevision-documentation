---
---
/**
 * Created by rodrigopavezi on 10/17/14.
 */

"use strict";
angular.module("risevision.developer")
    .config (["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/page-not-found');

        $urlRouterProvider.when('/', '/user');
        $urlRouterProvider.when('/index.html', '/user');

        $urlRouterProvider.rule(function($injector, $location) {

          var path = $location.path();
          var hasTrailingSlash = path[path.length-1] === '/';

          if(hasTrailingSlash) {

            //if last charcter is a slash, return the same url without the slash
            var newPath = path.substr(0, path.length - 1);
            return newPath;
          }

        });

        $stateProvider
            .state('developer', {
                url: '/developer',
                templateUrl: 'developer/developer.html',
                controller: 'DocumentationController'
            })
            .state('developer-developer', {
                url: '/developer/developer',
                templateUrl: 'developer/developer.html',
                controller: 'DocumentationController'
            })
            .state('developer-post', {
              url: '/developer/:post',
              templateUrl: function(params){ return "{{site.absoluteurl}}developer/" + params.post + ".html"; },
              controller: 'DocumentationController'
            })
            .state('developer-post-category', {
                url: '/developer/:category/:post',
                templateUrl: function(params){ return "{{site.absoluteurl}}developer/" + params.category +"/" + params.post + ".html"; },
                controller: 'DocumentationController'
            })
            .state('developer-post-sub', {
                url: '/developer/:category/:subCategory/:post',
                templateUrl: function(params){ return "{{site.absoluteurl}}developer/" + params.category + "/" + params.subCategory + "/" + params.post + ".html"; },
                controller: 'DocumentationController'
            })
            .state('user', {
                url: '/user',
                templateUrl: 'user/user.html',
                controller: 'DocumentationController'
            })
            .state('user-user', {
                url: '/user/user',
                templateUrl: 'user/user.html',
                controller: 'DocumentationController'
            })
            .state('user-post', {
              url: '/user/:post',
              templateUrl: function(params){ return "{{site.absoluteurl}}user/" + params.post + ".html"; },
              controller: 'DocumentationController'
            })
            .state('user-post-category', {
                url: '/user/:category/:post',
                templateUrl: function(params){ return "{{site.absoluteurl}}user/" + params.category + "/" + params.post + ".html"; },
                controller: 'DocumentationController'
            })
            .state('user-post-sub-category', {
                url: '/user/:category/:subCategory/:post',
                templateUrl: function(params){ return "{{site.absoluteurl}}user/" + params.category + "/" + params.subCategory + "/" + params.post + ".html"; },
                controller: 'DocumentationController'
            })
            .state('page-not-found', {
                url: '/page-not-found',
                templateUrl: 'page-not-found.html'
            })

            .state('apps', {
                template: "<div ui-view></div>",
                controller: 'MainAppController'
            })
            .state('apps.withoutPermission', {
                url: '/apps/userWithoutPermission',
                templateUrl: 'assets/dev-hub/partials/apps/apps.withoutPermission.html'
            })
            .state('apps.list', {
                url: '/apps/list',
                templateUrl: 'assets/dev-hub/partials/apps/apps.list.html',
                controller: 'AppManagementController'
            })
            .state('apps.add', {
                url: '/apps/add',
                templateUrl: 'assets/dev-hub/partials/apps/app-form.html',
                controller: 'AddAppController'
            })
            .state('apps.edit', {
                url: '/apps/edit/:id',
                templateUrl: 'assets/dev-hub/partials/apps/app-edit.html',
                controller: 'EditAppController'
            });


    }]);

---
---
/**
 * Created by rodrigopavezi on 10/17/14.
 */

"use strict";
angular.module("risevision.documentation")
    .config (["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise(function($injector, $location){
            $location.path("/404");
            var destinationUrl = $location.absUrl();
            $injector.invoke(function($window) {
                $window.location.replace(destinationUrl);
            });
            return true;
        });

        $urlRouterProvider.when('/', '/user');
        $urlRouterProvider.when('/index.html', '/user');

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
                url: '/developer/:category/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}developer/" + params.category +"/" + params.post + ".html"; },
                controller: 'DocumentationController'
            })
            .state('developer-post-sub', {
                url: '/developer/:category/:subCategory/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}developer/" + params.category + "/" + params.subCategory + "/" + params.post + ".html"; },
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
                url: '/user/:category/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}user/" + params.category + "/" + params.post + ".html"; },
                controller: 'DocumentationController'
            })
            .state('user-post-sub', {
                url: '/user/:category/:subCategory/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}user/" + params.category + "/" + params.subCategory + "/" + params.post + ".html"; },
                controller: 'DocumentationController'
            })
            .state('page-not-found', {
                url: '/404',
                templateUrl: '404.html'
            })

    }]);
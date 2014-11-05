---
---
/**
 * Created by rodrigopavezi on 10/17/14.
 */

"use strict";
angular.module("risevision.documentation")
    .config (["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('developer', {
                url: '/developer',
                templateUrl: 'developer/developer.html',
                controller: 'DocumentationController'
            })
            .state('post', {
                url: '/developer/:category/:subCategory/:post',
                templateUrl: function(params){ return "{{ site.baseurl }}/developer/" + params.category + "/" + params.subCategory + "/" + params.post; },
                controller: 'DocumentationController'
            })


    }]);
---
---
/**
 * Created by rodrigopavezi on 10/17/14.
 */

"use strict";
angular.module("risevision.documentation")
    .config (["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $stateProvider
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
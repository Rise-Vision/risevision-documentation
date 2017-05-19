/**
 * Created by rodrigopavezi on 11/13/14.
 */
"use strict";
angular.module("risevision.documentation")
    .directive('page', [function() {
        return {
            restrict: 'E',
            scope: true,
            link: function(scope, element, attr) {
                scope.$root.title = attr.title;
                scope.$root.description = attr.description;
                scope.$root.url = attr.url;
                scope.$root.image = attr.image;
                scope.$root.favicon = attr.favicon;
                scope.$root.httpcode = attr.httpcode;

            }
        }
    }]);
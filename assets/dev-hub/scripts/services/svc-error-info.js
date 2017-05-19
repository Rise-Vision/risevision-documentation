/**
 * Created by rodrigopavezi on 11/25/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .factory("errorInfo", ["$modal", function($modal) {
        return function(message) {
            var modalInstance = $modal.open({
                templateUrl: 'assets/dev-hub/partials/apps/error-info.html',
                controller: function($scope, $modalInstance){
                    $scope.message = message;
                },
                size: 'sm'
            });
        }
    }]);
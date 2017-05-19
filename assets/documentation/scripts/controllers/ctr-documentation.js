angular.module("risevision.documentation")
    .controller("DocumentationController", function($scope,$location,documentationTracker){
    	$scope.documentationTracker = documentationTracker;
    })
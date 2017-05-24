angular.module("risevision.documentation")
  .controller("DocumentationController", ["$scope", "documentationTracker", 
  function($scope, documentationTracker) {
  	$scope.documentationTracker = documentationTracker;
  }]);

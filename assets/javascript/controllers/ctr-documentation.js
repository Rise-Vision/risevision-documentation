angular.module("risevision.documentation")
    .controller("DocumentationController", function($scope,$location,documentationTracker){
    	$scope.documentationTracker = documentationTracker;
    	$scope.documentationTracker.promoBannerClicked("Rise Display Bundle", "Documentation: Create A Display", true, userState.inRVAFrame());
    })
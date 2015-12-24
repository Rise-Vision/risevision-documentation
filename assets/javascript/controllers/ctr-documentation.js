angular.module("risevision.documentation")
    .controller("DocumentationController", function($scope,$location,documentationTracker){
    	$scope.documentationTracker = documentationTracker;
    	bannerTracking.promoBannerClicked("Rise Display Bundle", "Documentation: Create A Display", true, userState.inRVAFrame());
    })
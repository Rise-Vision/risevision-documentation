angular.module("risevision.developer")
  .controller("CommonHeaderNavbarCtrl", ["$scope", "$rootScope", "$state",
  function($scope, $rootScope, $state) {
    $rootScope.navOptions = [{
      title: "App Registration",
      link: $state.href("apps.list"),
      cid: true,
      states: [
        "apps",
        "apps.withoutPermission",
        "apps.list",
        "apps.add",
        "apps.edit"
      ]
    },
    {
      title: "API Explorer",
      link: $state.href("api-explorer.list"),
      cid: true,
      states: [
        "api-explorer",
        "api-explorer.list",
        "api-explorer.explore",
        "api-explorer.explore.endpoint"
      ]
    },
    {
      title: "Developer Documentation",
      link: $state.href("documentation", {}, {absolute: true}),
      cid: true,
      states: [
        "documentation",
        "documentation-documentation",
        "documentation-post",
        "documentation-post-category",
        "documentation-post-sub",
        "page-not-found"
      ]
    }];
    
    $scope.navSelected = 'documentation';
    $rootScope.$on('$stateChangeSuccess', function () {
      $scope.navSelected = $state.current.name;
    });

  }]);

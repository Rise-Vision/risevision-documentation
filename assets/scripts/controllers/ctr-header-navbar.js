angular.module("risevision.developer")
  .controller("CommonHeaderNavbarCtrl", ["$rootScope", "$state",
  function($rootScope, $state) {
    $rootScope.navOptions = [{
      title: "App Registration",
      link: $state.href("apps.list")
    },
    {
      title: "API Explorer",
      link: $state.href("api-explorer.list")
    },
    {
      title: "Developer Documentation",
      link: $state.href("developer", {}, {absolute: true})
    },
    {
      title: "User Documentation",
      link: "https://risevision.zendesk.com/hc"
    },
    {
      title: "Training",
      link: "https://store.risevision.com/product/30/rise-training",
      target: "_blank"
    }];
  }]);

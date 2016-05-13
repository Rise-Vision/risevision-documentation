angular.module("risevision.documentation")
  .controller("HeaderNavbarCtrl", ["$rootScope", "$state",
  function($rootScope, $state) {
    $rootScope.navs = [
    {
      title: "Training",
      link: "https://store.risevision.com/product/30/rise-training",
      target: "_blank"
    },
    {
      title: "User Documentation",
      link: $state.href("user", {}, {absolute: true})
    },
    {
      title: "Developer Documentation",
      link: $state.href("developer", {}, {absolute: true})
    }];
  }]);

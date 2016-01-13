angular.module("risevision.documentation")
  .controller("HeaderNavbarCtrl", ["$rootScope", "$state",
  function($rootScope, $state) {
    $rootScope.navs = [
    {
      title: "Training",
      link: "https://www.risevision.com/webinars",
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

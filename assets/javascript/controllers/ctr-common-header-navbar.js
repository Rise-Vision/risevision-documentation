angular.module("risevision.documentation")
    .controller("CommonHeaderNavbarCtrl", function($rootScope,$scope,$state) {
        $rootScope.navOptions = [
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
    });



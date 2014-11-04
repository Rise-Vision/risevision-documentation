angular.module("risevision.documentation")
    .controller("CommonHeaderNavbarCtrl", function($rootScope,$scope,$state) {
        $rootScope.navOptions = [{
            title: "Developer Documentation",
            link: $state.href("developer")
        }];
    });



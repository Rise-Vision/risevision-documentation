angular.module("risevision.documentation")
    .controller("CommonHeaderNavbarCtrl", function($rootScope,$scope,$state) {
        $rootScope.navOptions = [{
            title: "User Documentation",
            link: $state.href("user")
        },{
            title: "Developer Documentation",
            link: $state.href("developer")
        }];
    });



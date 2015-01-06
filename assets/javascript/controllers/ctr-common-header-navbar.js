angular.module("risevision.documentation")
    .controller("CommonHeaderNavbarCtrl", function($rootScope,$scope,$state) {
        $rootScope.navOptions = [
        {
            title: "Support",
            link: "http://support.risevision.com",
            target: "_blank"
        },
        {
            title: "Community",
            link: "http://community.risevision.com",
            target: "_blank"
        },
        {
            title: "Training",
            link: "http://www.risevision.com/user-training/",
            target: "_blank"
        },
        {
            title: "User Documentation",
            link: $state.href("user")
        },
        {
            title: "Developer Documentation",
            link: $state.href("developer")
        },
        {
            title: "Developer Hub",
            link: "http://developer.risevision.com",
            target: "_blank"
        }];
    });



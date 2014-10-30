angular.module("risevision.developer.hub")
    .controller("CommonHeaderNavbarCtrl", function($rootScope,$scope,$state) {
        $rootScope.navOptions = [{
            title: "Apps",
            link: $state.href("apps.main")
        }, {
            title: "Documentation",
            link: $state.href("documentation")
        }, {
            title: "Style Guide",
            link: "http://rise-vision.github.io/style-guide/",
            target: "_blank"
        }];
    });



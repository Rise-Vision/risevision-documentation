"use strict";
angular.module("risevision.documentation",["ui.router","risevision.common.header", "ui.bootstrap","ui.bootstrap.tpls","risevision.google-analytics"])
    .run(['$rootScope', '$location', '$window', function($rootScope, $location, $window){
        $rootScope
            .$on('$stateChangeSuccess',
            function(event){

                if (!$window.ga)
                    return;

                $window.ga('send', 'pageview', { page: $location.path() });
            });
    }])
  .run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams ) {

      // put ui-router $state on $rootScope, so we have access to it in all $scopes
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;

      $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        // always see what happens in your app!
        console.debug('stateChangeStart from: ' + (fromState && fromState.name) + ' to: ' + toState.name);
        // handle auth here as well, check whether user is allowed to go to this state, abort if not
      });

      $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
        // see what happens in your app!
        console.debug('stateChangeSuccess from: ' + (fromState && fromState.name) + ' to: ' + toState.name);
      });

      // log stateChangeErrors
      $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
        console.log('Error on StateChange from: "' + (fromState && fromState.name) + '" to:  "'+ toState.name + '", err:' + error.message + ", code: " + error.status);
        $state.go('page-not-found');
      });

    }]);


angular.module('risevision.common.i18n.config', [])
  .constant('LOCALES_PREFIX',
  'assets/components/rv-common-i18n/dist/locales/translation_')
  .constant('LOCALES_SUFIX', '.json');
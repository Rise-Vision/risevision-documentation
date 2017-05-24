/**
 * Created by rodrigopavezi on 11/20/14.
 */
"use strict";
angular.module("risevision.developer.hub")
    .controller("ApiExplorerExploreEndpointController",
    ["$rootScope", "$scope", "$state", "$location", "$stateParams", "$log", "getRest", "callEndpoint", "$window",
        function($rootScope, $scope, $state, $location, $stateParams, $log, getRest, callEndpoint, $window){

            $scope.showResponse = false;
            $scope.showSpinner = false;
            $scope.requestParameters = {};

            $rootScope.title = $stateParams.id;

            // Splits the id so we can take the resource and the method from it e.g core.company.get
            // idParts[0] = core
            // idParts[1] = company
            // idPatrs[2] = get
            var idParts = $stateParams.id.split(".");

            $scope.$watch(function () { return $rootScope.resources; },
                function (resources) {
                    $scope.$watch(function () { return $rootScope.descriptions; },
                        function (descriptions) {
                            $rootScope.resourceName = idParts[1];
                            $rootScope.method = $rootScope.resources[idParts[1]].methods[idParts[2]]
                            $rootScope.method.description = descriptions[$rootScope.method.id];
                       }
                    );
                }
            );

            $scope.execute = function(methodId, requestParameters){
             console.log("methodId: "+methodId);
                $scope.showSpinner = true;
                cleanParameters(requestParameters);

                var call = callEndpoint(methodId,requestParameters)
                    .then(function (resp) {
                        handlesResponse(resp);
                    }, function(resp) {
                        handlesResponse(resp);
                    });

                $loading.stopSpinnerAfterPromise("rv-dev-hub-api-explorer-execute-loader", call);
            }

            var handlesResponse = function(resp){
                $scope.response = syntaxHighlight(JSON.stringify(resp, undefined, 2));
                $scope.showResponse = true;
            }

            var cleanParameters = function(parameters){
                for (var i in parameters) {
                    if (parameters[i] === "" || parameters[i] === undefined ) {
                        delete parameters[i];
                    }
                }
            }

            var syntaxHighlight = function(json) {
                json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                    var cls = 'm';
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            cls = 'nt';
                        } else {
                            cls = 's';
                        }
                    } else if (/true|false/.test(match)) {
                        cls = 'ss';
                    } else if (/null/.test(match)) {
                        cls = 'ss';
                    }
                    return '<span class="' + cls + '">' + match + '</span>';
                });
            }

    }]);
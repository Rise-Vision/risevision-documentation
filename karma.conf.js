/**
 * Created by rodrigopavezi on 10/17/14.
 */
module.exports = function(config){
    'use strict';
    config.set({

        basePath : './',

        files : [
            'assets/components/jquery/dist/jquery.js',
            'assets/components/angular/angular.js',
            'assets/components/angular-route/angular-route.js',
            'assets/components/angular-mocks/angular-mocks.js',
            'assets/components/q/q.js',
            "assets/components/angular-bootstrap/ui-bootstrap-tpls.js",
            'assets/components/rise-vision-common-header/dist/js/common-header.js',
            'assets/components/angular-local-storage/angular-local-storage.js',
            'assets/javascript/**/*.js',
            'tests/unit/**/*.js'

        ],

        exclude : [
            'assets/javascript/route.js'
        ],

        autoWatch : true,

        frameworks: ['jasmine', 'chai'],

        browsers : ['PhantomJS'],

        plugins : [
            //'karma-chrome-launcher',
            //'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-chai',
            'karma-phantomjs-launcher'
        ],

        junitReporter : {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};